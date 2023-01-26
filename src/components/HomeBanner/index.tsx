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
                        Hello, I&apos;m <span>David Villalba</span>
                    </Typography>
                    <Typography variant="h5">
                        I am a full stack Developer
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default HomeBanner;
