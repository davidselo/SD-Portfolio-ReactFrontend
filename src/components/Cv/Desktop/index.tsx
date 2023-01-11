import {Typography} from '@mui/material';
import {Box, Container, Grid} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import JobExperienceList from 'components/JobExperienceList';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LanguageIcon from '@mui/icons-material/Language';
import LanguageCard from '../LanguageCard';

const DesktopCv: React.FC = () => {
    const printPage = () => {
        window.print();
        return;
    };
    const {basics} = cvData;
    const {work} = cvData;
    const {education} = cvData;
    const {languages} = cvData;

    return (
        <>
            <Container className="cv--wrapper">
                <Box textAlign="center" marginTop="20px">
                    <Typography variant="h2">CV page</Typography>
                </Box>

                <Container
                    id="cv-content"
                    disableGutters
                    sx={{marginTop: '20px', backgroundColor: '#ffffff'}}
                    maxWidth="md"
                >
                    {/* CV Header */}
                    {/* @todo: Move Header to his own Component. */}
                    <Grid
                        container
                        alignContent="center"
                        justifyContent="center"
                        className="cv-content--header"
                        paddingBottom="20px"
                    >
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            <Box
                                textAlign="center"
                                marginTop="20px"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant="h4">
                                    {basics.name.toUpperCase()}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={5} />
                        <Grid item xs={4}>
                            <Box sx={{paddingLeft: '31px'}}>
                                <Typography variant="h6">
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <EmailIcon
                                            fontSize="inherit"
                                            sx={{paddingTop: '6px'}}
                                        />

                                        <Box sx={{marginLeft: '5px'}}>
                                            {basics.email}
                                        </Box>
                                    </Box>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}
                                >
                                    <PhoneIphoneIcon
                                        fontSize="inherit"
                                        sx={{paddingTop: '7px'}}
                                    />

                                    <Box>{basics.phone}</Box>
                                </Box>
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* CV Body */}
                    {/* @todo: Move body to own component */}
                    <Grid container className="cv-content--body">
                        <JobExperienceList work={work} />
                        {/* Expertise, Education & Language. */}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Typography variant="h5">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <SettingsIcon />
                                            <Box sx={{marginLeft: '10px'}}>
                                                EXPERTISE
                                            </Box>
                                        </Box>
                                    </Typography>
                                    <Typography
                                        variant="inherit"
                                        sx={{marginTop: '20px'}}
                                    >
                                        {basics.summary}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={4}>
                                    <Typography variant="h5">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <SchoolIcon />
                                            <Box sx={{marginLeft: '10px'}}>
                                                EDUCATION
                                            </Box>
                                        </Box>
                                    </Typography>
                                    {education.map(item => {
                                        return (
                                            <>
                                                <Box
                                                    className="cv-experience--places"
                                                    sx={{marginTop: '20px'}}
                                                >
                                                    <Typography>
                                                        {item.studyType}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {item.institution}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {item.startDate}-
                                                        {item.endDate}
                                                    </Typography>
                                                </Box>
                                            </>
                                        );
                                    })}
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography variant="h5">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                            }}
                                        >
                                            <LanguageIcon />
                                            <Box sx={{marginLeft: '10px'}}>
                                                LANGUAGE
                                            </Box>
                                        </Box>
                                    </Typography>
                                    <LanguageCard languages={languages} />
                                </Grid>

                                <Grid item xs={12}>
                                    <Typography
                                        variant="h5"
                                        sx={{marginTop: '20px'}}
                                    >
                                        <SchoolIcon />
                                        Skills
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Container>
                <Container>
                    <Box textAlign="center" marginTop="20px">
                        <button onClick={printPage}>Print CV</button>
                    </Box>
                </Container>
            </Container>
        </>
    );
};

export default DesktopCv;
