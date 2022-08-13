import React from 'react';
// import { Header } from 'components/Header/Header';
import HomeBanner from 'components/HomeBanner';
import HeadlessHtml from 'components/HeadlessHtml';
import Header from 'components/Header';

import './sass/styles.scss';

const App: React.FC = () => (
    <div className="wrapper">
        <HomeBanner />
        <Header />
        {/* @todo: Add the top menu*/}
        <HeadlessHtml />
    </div>
);

export default App;
