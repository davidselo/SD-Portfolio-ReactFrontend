import React from 'react';
import { Header } from './components/Header/Header';
import HeadlessHtml from './components/HeadlessHtml';


import './sass/styles.scss';

const App: React.FC = () => (
    <div className="wrapper">
        <Header />
        { /* @todo: Add the top menu*/}
        <HeadlessHtml />
    </div>
);

export default App;
