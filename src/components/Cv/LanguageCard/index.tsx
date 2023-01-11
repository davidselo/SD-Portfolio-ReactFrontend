import {Box, Typography} from '@mui/material';
import React from 'react';

interface Props {
    languages: [
        {
            language: string;
            fluency: string;
        },
    ];
}

const LanguageCard: React.FC<Props> = ({languages}) => {
    return (
        <>
            {languages.map(language => {
                return (
                    <>
                        <Box
                            className="cv-experience--places"
                            sx={{marginTop: '20px'}}
                        >
                            <Typography>{language.language}</Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography>{language.fluency}</Typography>
                        </Box>
                    </>
                );
            })}
        </>
    );
};

export default LanguageCard;
