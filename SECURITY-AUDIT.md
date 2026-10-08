# Security Audit — SD-Portfolio-ReactFrontend

**Date:** 2026-10-08
**Scope requested:** authentication, secrets handling, dependencies with a known *reachable* vulnerability.
**Nature of the app:** A static, client-only React/TypeScript single-page portfolio. It renders CV
data bundled as JSON at build time. There is **no backend in this repo, no login, no session, and no
user-supplied input that reaches a dangerous sink.**

## Executive summary

- **Authentication:** There is no authentication surface. No login, token, cookie, session, or
  credential-handling code exists. Nothing to harden here — documented as N/A below.
- **Secrets handling:** No secrets are committed. The only tracked env file (`.env.example`) holds
  non-secret build flags. CI AWS credentials are injected from a CircleCI context, not hardcoded.
  One **latent** risk: the build inlines `.env` into the public client bundle, so any future secret
  placed in `.env` would ship to browsers. (Finding S1.)
- **Dependencies:** `yarn audit` reports 566 advisories (21 critical / 331 high / 171 moderate / 43
  low). **The overwhelming majority are build- or dev-only** (webpack-dev-server, node-sass, jest,
  babel toolchain, css-loader) and never reach a user's browser. A **14-advisory subset ships in the
  runtime bundle** (react-router, graphql, @babel/runtime, history). After tracing actual usage,
  **none of the runtime advisories are reachable** in this app's code paths (details in D1/D2).
- **Bottom line:** No critical *reachable* application vulnerability was found. The real, actionable
  work is **supply-chain hygiene** (D1, D2) and **one secrets-exposure guardrail** (S1), plus minor
  config cleanups (H1–H4).

---

## Findings

### S1 — Build inlines `.env` into the public client bundle (latent secret exposure) — MEDIUM (preventive)
- **Where:** `webpack.config.ts` (`new Dotenv()`), `.env.example`, `package.json`.
- **Detail:** `dotenv-webpack` replaces `process.env.*` references with literal values from `.env`
  at build time, and those values are emitted into `build.js`, which is uploaded to a
  **public-read** S3 bucket (`.circleci/config.yml`). Today `.env` only holds `PERSISTENCE_MODE` /
  `NODE_ENV` (non-secret), so there is **no current leak**. The risk is latent: the moment anyone
  adds an API key, GraphQL auth token, or similar to `.env`, it is published to every visitor.
- **Reachability:** Not currently exploitable (no secret present). Classified preventive/MEDIUM
  because the deploy target is public and the footgun is one commit away.
- **Fix:** Restrict what the bundle may embed. Replace bare `new Dotenv()` with an explicit
  allow-list (e.g. `new Dotenv({ systemvars: false })` plus `safe: true` against `.env.example`, or
  switch to `DefinePlugin` injecting only the known-public `PERSISTENCE_MODE`). Add a short comment
  in `.env.example` warning that anything here becomes public. Never store real secrets in `.env`
  for this project.

### D1 — React Router advisories present in the shipped tree, but not reachable — LOW
- **Where:** `react-router@6.4.3`, `react-router-dom@6.4.3`, transitive `@remix-run/router@1.0.3`.
- **Advisories:** XSS via open redirects (fixed `@remix-run/router >=1.23.2`); unexpected external
  redirect via untrusted header (fixed `react-router >=6.30.2`); arbitrary constructor injection via
  data-router deserialization and backslash open-redirect in `<Link>`/`useNavigate` (both fixed only
  in `react-router >=7.18.0`).
- **Reachability analysis (src/App.tsx, src/components/Header/index.tsx, src/components/Cv/Desktop):**
  - The app uses `<BrowserRouter>` with **static routes only** (`/`, `/cv`, `/cv/:cvVersion`). It
    does **not** use the data router (`createBrowserRouter`) or loader/`redirect()` APIs, so the
    constructor-injection and header-redirect issues have no code path.
  - Every `<Link to=...>` uses a **hardcoded** `navigationLinks` array — no attacker-controlled
    `to`, so the backslash open-redirect is not triggerable.
  - `:cvVersion` / `useSearchParams` feeds a `switch` with a `default` branch
    (`src/components/Cv/Desktop/index.tsx` `loadCvData`) — untrusted input selects between two
    bundled JSON files and cannot inject a route or redirect target.
  - No SSR, no `Host`/`X-Forwarded-Host` handling (pure client SPA).
- **Recommendation:** Patch for hygiene, not because it is exploitable. Bump to the latest 6.x
  (`react-router@^6.30.2`, which pulls `@remix-run/router >=1.23.2`) to clear the high + one moderate
  with **no code changes**. The two 7.18.0-only moderates are a major-version migration and are
  **not justified** by reachability here — defer unless upgrading for other reasons.

### D2 — Other runtime-bundle advisories, not reachable — LOW
- **`graphql@16.5.0`** — "Uncontrolled Resource Consumption" (fixed `>=16.8.1`). This is a
  server-side parser DoS. On the client, `graphql` only builds an AST from the static `gql` template
  in `src/graphql/query/introdutionSkill.tsx`; no untrusted document is parsed. Bump to
  `graphql@^16.8.1` (patch-level, safe) for hygiene.
- **`@babel/runtime` (via @emotion, @material-ui, history)** — RegExp complexity in generated helper
  code (fixed `>=7.26.10`). Reachable only with attacker-controlled input to the affected helper;
  not present. Clears transitively as parents are updated.
- **`history@5.3.0`** — only flagged via its `@babel/runtime` dependency; no direct advisory.

### D3 — Build/dev-only advisory mass — LOW (CI/build integrity, not user-facing)
- **Where:** `webpack-dev-server@3.11.2`, `node-sass@7` (→ old `tar`, `form-data`, `minimatch`),
  `jest`/`@babel/traverse`, `css-loader@5`→`loader-utils`, `webpack@5` (<5.76).
- **Detail:** These produce most of the 21 critical / 331 high hits (e.g. `loader-utils` prototype
  pollution, `@babel/traverse` arbitrary code execution during compile, `webpack-dev-server` source
  theft). They execute only on a developer machine or in CI, **never in the deployed bundle**. Real
  but lower-priority: they matter for build-integrity / a compromised-dependency-during-build threat
  model, not for site visitors.
- **Recommendation (staged, see plan):** upgrade the toolchain — `webpack-dev-server@^5`,
  replace deprecated `node-sass` with `sass` (dart-sass), `css-loader@^6`, `webpack@^5.94+`, and the
  jest/babel chain. This is the largest effort and should be its own slice with a working `build` +
  `test` gate, because major bumps (webpack-dev-server 3→5, node-sass→sass, ts-loader) have breaking
  config changes.

### H1 — Apollo devtools enabled unconditionally — LOW
- **Where:** `src/index.tsx` `connectToDevTools: true`. Exposes the GraphQL client/cache to the
  Apollo browser extension in production. Gate on `process.env.NODE_ENV !== 'production'`.

### H2 — Hardcoded `http://localhost:3000/api/graphql` Apollo endpoint — LOW (correctness + mixed-content)
- **Where:** `src/index.tsx`. In `headless` persistence mode a production build would call
  `http://localhost:3000` (broken, and plaintext HTTP → mixed-content block on an HTTPS site). The
  app currently ships in `static` mode so the client is never used, but the value should come from a
  **public** build-time variable (see S1) and be `https://`.

### H3 — Personal PII committed in CV JSON — INFORMATIONAL
- **Where:** `src/data/staticData/cv/default.json`, `engineer.json` contain a real email and phone
  number (`david.selo@gmail.com`, `+44 7561139547`). This is intentional public portfolio content;
  flagged only so the owner confirms the phone number is meant to be public.

### H4 — S3 deploy uses `--acl public-read` — ACCEPTED
- **Where:** `.circleci/config.yml`. Correct for a public static site. No change; noted for
  completeness. Ensure the bucket has no non-public objects and that the CircleCI AWS context keys
  (`AWS_*_BLUE`) are least-privilege (PutObject on this bucket only).

### Dismissed / considered
- XSS sinks: none — no `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or `document.write` in `src/`.
- Hash redirect (`src/index.tsx` `history.replace(path)` from `location.hash`): the regex
  `/#!(\/.*)$/` forces `path` to begin with `/`, so it cannot be an absolute/protocol URL — same
  document, no open redirect.
- Hardcoded secrets in tree: none found (grep for key/secret/token/password across `src` + configs).

---

## Implementation plan (for the builder)

**Goal:** Close the one preventive secret-exposure gap and reduce reachable-in-browser advisory
count to zero via safe patch bumps, then (separately) modernize the dev/build toolchain — without
changing app behavior.

### Slice 1 — Secrets guardrail (S1, H1, H2) — small, no behavior change
- `webpack.config.ts`: replace `new Dotenv()` with an explicit, non-leaky config (allow-list the
  known public var; `systemvars: false`). Add `safe: true` validated against `.env.example`.
- `.env.example`: add a one-line warning that values are embedded in the public bundle.
- `src/index.tsx`: gate `connectToDevTools` on non-production; source the Apollo `uri` from the
  public build var with an `https` default.
- **Acceptance:** `yarn build` succeeds; `grep -R "process.env" build/build.js` shows no unexpected
  vars; app still renders in `static` mode.

### Slice 2 — Runtime dependency patch bumps (D1, D2) — small, mechanical
- `package.json`: `react-router@^6.30.2`, `react-router-dom@^6.30.2`, `graphql@^16.8.1`.
- Run `yarn install`, then `yarn jest` + `yarn build`.
- **Acceptance:** `yarn audit --groups dependencies` (production) shows **0** advisories in the
  runtime tree; existing Jest snapshots (Header) still pass or are regenerated intentionally.

### Slice 3 — Toolchain modernization (D3) — large, isolate and gate
- Upgrade `webpack-dev-server@^5`, `webpack@^5.94`, `css-loader@^6`, replace `node-sass` with
  `sass`, bump `jest`/`ts-jest`/`babel` chain; adjust `webpack.config.ts` devServer config for the
  v5 API and `sass` loader implementation.
- **Acceptance:** `yarn lint`, `yarn test`, `yarn build`, and `yarn start` (dev server boots on
  :3001) all pass; `yarn audit` critical/high count drops materially.
- **Risk:** breaking config changes across these majors. Keep this slice independent so Slices 1–2
  can ship even if 3 needs iteration.

### Verification commands
```
yarn install --frozen-lockfile
yarn audit --groups dependencies   # expect 0 after Slice 2
yarn lint
yarn test
yarn build
grep -RnoE "AKIA|secret|token|api[_-]?key" build/ || echo "no secrets in bundle"
```

### Blockers / decisions for the owner
- Confirm the app will remain **static-only** (no `headless` GraphQL backend). If headless is
  revived, the hardcoded `localhost` endpoint and the bundle-embedding of its URL must be revisited.
- Confirm the committed phone number/email are intended to be public (H3).
