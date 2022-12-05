import React from 'react';
// import { Header } from 'components/Header/Header';
import HomeBanner from 'components/HomeBanner';
import SkillsSumary from 'components/SkillsSumary';
import Header from 'components/Header';
import Manatee from 'components/Manatee';
import Whale from 'components/Whale';
import Narwhal from 'components/Narwhal';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: ['Raleway'].join(','),
    },
});
theme = responsiveFontSizes(theme);

import './sass/styles.scss';
import Beluga from 'components/Whale/Beluga';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <div className="wrapper">
            <HomeBanner />
            <Header />
            {/* @todo: Add the top menu*/}
            <SkillsSumary />
            {/* Testing React Routing*/}
            <div className="wrapper">
                <h1>Marine Mammals</h1>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/manatee">Manatee</Link>
                            </li>
                            <li>
                                <Link to="/narwhal">Narwhal</Link>
                            </li>
                            <li>
                                <Link to="/whale">Whale</Link>
                                <ul>
                                    <li>
                                        <Link to="/whale/beluga">Beluga</Link>
                                    </li>
                                    <li>
                                        <Link to="/whale/blue">Blue</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Manatee />} />
                        <Route path="/manatee" element={<Manatee />} />
                        <Route path="/whale" element={<Whale />}>
                            <Route path=":type" />
                        </Route>
                        <Route path="/narwhal" element={<Narwhal />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    </ThemeProvider>
);

export default App;
