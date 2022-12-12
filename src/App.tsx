import React from 'react';
// import { Header } from 'components/Header/Header';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import Cv from 'pages/Cv';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './sass/styles.scss';

const App: React.FC = () => (
    <BrowserRouter>
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cv" element={<Cv />} />
                </Route>
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;
