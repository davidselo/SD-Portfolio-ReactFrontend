import React from 'react';
// import { Header } from 'components/Header/Header';
import Home from 'pages/Home';
import Layout from 'pages/Layout';
import Cv from 'pages/Cv';
import {Routes, Route} from 'react-router-dom';

import './sass/styles.scss';
import {Container} from '@mui/material';

const App: React.FC = () => {
    return (
        <Container
            className="wrapper"
            sx={{backgroundColor: '#d3d0cb'}}
            maxWidth={false}
            disableGutters
        >
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="cv" element={<Cv />} />
                </Route>
            </Routes>
        </Container>
    );
};

export default App;
