import React from 'react';
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

interface Props {
    education: Array<Study>;
}

interface Study {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export const EducationCard: React.FC<Props> = ({education}: Props) => {
    return (
        <>
            <Typography variant="h5">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <SchoolIcon />
                    <Box sx={{marginLeft: '10px'}}>EDUCATION</Box>
                </Box>
            </Typography>
            {education.map(item => {
                return (
                    <Container key={item.studyType}>
                        <Box
                            className="cv-experience--places"
                            sx={{marginTop: '20px'}}
                        >
                            <Typography>{item.studyType}</Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography>{item.institution}</Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography>
                                {item.startDate}-{item.endDate}
                            </Typography>
                        </Box>
                    </Container>
                );
            })}
        </>
    );
};

export default EducationCard;
