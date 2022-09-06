import React from 'react';
// import { Header } from 'components/Header/Header';
import HomeBanner from 'components/HomeBanner';
import SkillsSumary from 'components/SkillsSumary';
import Header from 'components/Header';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

import './sass/styles.scss';

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <div className="wrapper">
            <HomeBanner />
            <Header />
            {/* @todo: Add the top menu*/}
            <SkillsSumary />
        </div>
    </ThemeProvider>
);

export default App;
