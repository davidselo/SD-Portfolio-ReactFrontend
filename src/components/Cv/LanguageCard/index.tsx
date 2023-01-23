import {Box, Typography, Container} from '@mui/material';
import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';

interface language {
    language: string;
    fluency: string;
}
interface Props {
    languages: Array<language>;
}

const LanguageCard: React.FC<Props> = ({languages}: Props) => {
    return (
        <>
            <Typography variant="h6">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <LanguageIcon />
                    <Box sx={{marginLeft: '10px', fontWeight: 'bold'}}>
                        LANGUAGE
                    </Box>
                </Box>
            </Typography>
            {languages.map(language => {
                return (
                    <Container disableGutters key={language.language}>
                        <Box
                            className="cv-experience--places"
                            sx={{marginTop: '10px'}}
                        >
                            <Typography variant="body1">
                                {language.language}
                            </Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography variant="body2">
                                {language.fluency}
                            </Typography>
                        </Box>
                    </Container>
                );
            })}
        </>
    );
};

export default LanguageCard;
