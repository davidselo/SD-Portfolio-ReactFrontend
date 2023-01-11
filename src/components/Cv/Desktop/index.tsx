import {Typography} from '@mui/material';
import {Box, Container, Grid} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import JobExperienceList from 'components/JobExperienceList';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

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
                    sx={{marginTop: '20px'}}
                    maxWidth="md"
                >
                    {/* CV Header */}
                    {/* @todo: Move Header to his own Component. */}
                    <Grid
                        container
                        spacing={1}
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
                        {/* Expertise and Education. */}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid container>
                                <Grid xs={3}>
                                    <Typography variant="h5">
                                        <SettingsIcon />
                                        EXPERTISE
                                    </Typography>
                                    <Typography
                                        variant="inherit"
                                        sx={{marginTop: '20px'}}
                                    >
                                        {basics.summary}
                                    </Typography>
                                </Grid>
                                <Grid xs={1} />
                                <Grid xs={7}>
                                    <Typography variant="h5">
                                        <SchoolIcon />
                                        Education
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
                                <Grid xs={1} />
                                <Grid xs={3}>
                                    <Typography
                                        variant="h5"
                                        sx={{marginTop: '20px'}}
                                    >
                                        <SchoolIcon />
                                        Language
                                    </Typography>
                                    {languages.map(language => {
                                        return (
                                            <>
                                                <Box
                                                    className="cv-experience--places"
                                                    sx={{marginTop: '20px'}}
                                                >
                                                    <Typography>
                                                        {language.language}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {language.fluency}
                                                    </Typography>
                                                </Box>
                                            </>
                                        );
                                    })}
                                </Grid>
                                <Grid xs={1} />
                                <Grid xs={7}>
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
