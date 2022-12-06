import React from 'react';
// import { Header } from 'components/Header/Header';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import Cv from 'pages/Cv';
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
    </ThemeProvider>
);

export default App;
