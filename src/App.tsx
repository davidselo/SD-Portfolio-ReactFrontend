import React from 'react';
// import { Header } from 'components/Header/Header';
import HomeBanner from 'components/HomeBanner/Index';
import HeadlessHtml from 'components/HeadlessHtml/Index';
import Header from 'components/Header/Index';

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
