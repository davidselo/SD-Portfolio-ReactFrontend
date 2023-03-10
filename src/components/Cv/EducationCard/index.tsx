import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import {CvSectionTitle} from 'components/Cv/CvSectionTitle';

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
            <CvSectionTitle title="education" iconComponent={<SchoolIcon />} />
            {education.map(item => {
                return (
                    <Container disableGutters key={item.studyType}>
                        <Box
                            className="cv-experience--places"
                            sx={{marginTop: '10px'}}
                        >
                            <Typography variant="body1">
                                {item.studyType}
                            </Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography variant="body2">
                                {item.institution}
                            </Typography>
                        </Box>
                        <Box className="cv-experience--places">
                            <Typography variant="body2">
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
