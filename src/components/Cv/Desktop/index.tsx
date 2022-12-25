import {Typography} from '@mui/material';
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';

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
                        <Grid item xs />
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
                        <Grid item xs></Grid>
                        <Grid item xs={5} />
                        <Grid item xs={4}>
                            <Typography variant="h6">{basics.email}</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6">{basics.phone}</Typography>
                        </Grid>
                    </Grid>
                    {/* CV Body */}
                    {/* @todo: Move body to own component */}
                    <Grid container className="cv-content--body">
                        {/* Profesional Experience title*/}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    <TipsAndUpdatesIcon />
                                    PROFESIONAL EXPERIENCE
                                </Typography>
                            </Grid>
                        </Container>
                        {/* Profesional Experience companies*/}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid container>
                                {work.map(company => {
                                    return (
                                        <>
                                            <Grid xs={1} />
                                            <Grid xs={3}>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {company.position}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {company.name}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography>
                                                        {company.startDate}-
                                                        {company.endDate}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={1} />
                                            <Grid xs={7}>
                                                <Box
                                                    sx={{
                                                        width: '100%',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    <List dense>
                                                        {company.highlights.map(
                                                            hightlight => (
                                                                <>
                                                                    <ListItem
                                                                        dense
                                                                    >
                                                                        <ListItemText
                                                                            primary={
                                                                                hightlight
                                                                            }
                                                                            inset={
                                                                                false
                                                                            }
                                                                        />
                                                                    </ListItem>
                                                                </>
                                                            ),
                                                        )}
                                                    </List>
                                                </Box>
                                            </Grid>
                                        </>
                                    );
                                })}
                            </Grid>
                        </Container>
                        {/* Expertise and Education. */}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid container>
                                <Grid xs={1} />
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
