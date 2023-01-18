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
            <Typography variant="h5">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <LanguageIcon />
                    <Box sx={{marginLeft: '10px'}}>LANGUAGE</Box>
                </Box>
            </Typography>
            {languages.map(language => {
                return (
                    <Container key={language.language}>
                        <Box
                            className="cv-experience--places"
                            sx={{marginTop: '20px'}}
                        >
                            <Typography>{language.language}</Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography>{language.fluency}</Typography>
                        </Box>
                    </Container>
                );
            })}
        </>
    );
};

export default LanguageCard;
