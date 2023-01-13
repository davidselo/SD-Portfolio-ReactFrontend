import {Box, Typography} from '@mui/material';
import React from 'react';

const MobileCv: React.FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            sx={{backgroundColor: '#98B9F2'}}
        >
            <Box textAlign="center">
                <Typography variant="h4">
                    Please open this CV on a desktop screen
                </Typography>
            </Box>
        </Box>
    );
};

export default MobileCv;
