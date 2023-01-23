import {Typography} from '@mui/material';
import {Box, Container, Grid, Button} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';
import SettingsIcon from '@mui/icons-material/Settings';
import JobExperienceList from 'components/JobExperienceList';
import SkillList from 'components/Cv/SkillList';

import PsychologyIcon from '@mui/icons-material/Psychology';

import LanguageCard from '../LanguageCard';
import EducationCard from '../EducationCard';
import CvHeader from '../CvHeader';

const DesktopCv: React.FC = () => {
    const printPage = () => {
        window.print();
        return;
    };
    const {basics} = cvData;
    const {work} = cvData;
    const {education} = cvData;
    const {languages} = cvData;
    const {skills} = cvData;

    return (
        <Container className="cv--wrapper">
            <Container>
                <Box textAlign="center" marginTop="20px">
                    <Button
                        className="cv--print-button"
                        variant="contained"
                        onClick={printPage}
                    >
                        Print CV
                    </Button>
                </Box>
            </Container>

            <Container
                id="cv-content"
                disableGutters
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#ffffff',
                    paddingBottom: '20px',
                }}
                maxWidth="md"
            >
                {/* CV Header */}
                <CvHeader
                    name={basics.name.toUpperCase()}
                    email={basics.email}
                    phone={basics.phone}
                />

                {/* CV Body */}
                {/* @todo: Move body to own component */}
                <Grid container className="cv-content--body">
                    <JobExperienceList work={work} />
                    {/* Expertise, Education & Language. */}
                    <Container sx={{marginTop: '15px'}}>
                        <Grid container>
                            <Grid container spacing={5}>
                                <Grid item xs={1} />
                                <Grid item xs={4}>
                                    <Typography variant="h6">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <SettingsIcon />
                                            <Box
                                                sx={{
                                                    marginLeft: '10px',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                EXPERTISE
                                            </Box>
                                        </Box>
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{marginTop: '10px'}}
                                    >
                                        {basics.summary}
                                    </Typography>
                                </Grid>

                                <Grid item xs={4}>
                                    <EducationCard education={education} />
                                </Grid>

                                <Grid item xs={3}>
                                    <LanguageCard languages={languages} />
                                </Grid>
                            </Grid>

                            <Grid item xs={1} />
                            <Grid item xs={11}>
                                <Typography
                                    variant="h6"
                                    sx={{marginTop: '15px'}}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <PsychologyIcon />
                                        <Box
                                            sx={{
                                                marginLeft: '10px',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            SKILLS
                                        </Box>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid item xs={11}>
                                    <SkillList skills={skills} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
            </Container>
            <Container>
                <Box textAlign="center" marginTop="20px">
                    <Button
                        className="cv--print-button"
                        variant="contained"
                        onClick={printPage}
                    >
                        Print CV
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};

export default DesktopCv;
