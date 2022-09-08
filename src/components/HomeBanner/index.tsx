import React from 'react';
import './Styles.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HomeBanner: React.FC = () => {
    return (
        <div className="header__topIntroduction">
            <div className="header__topIntroduction-text">
                <Box alignContent="center" textAlign="center">
                    <Typography variant="h4">
                        Hello, I'm <span>David Villalba</span>
                    </Typography>
                    <Typography variant="h5">
                        I am a full stack Developer
                    </Typography>
                </Box>
            </div>
            <div className="light x1"></div>
            <div className="light x2"></div>
            <div className="light x3"></div>
            <div className="light x4"></div>
            <div className="light x5"></div>
            <div className="light x6"></div>
            <div className="light x7"></div>
            <div className="light x8"></div>
            <div className="light x9"></div>
        </div>
    );
};

export default HomeBanner;
