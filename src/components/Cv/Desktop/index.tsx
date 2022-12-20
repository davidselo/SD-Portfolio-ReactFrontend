import {Typography} from '@material-ui/core';
import {Box, Container, Grid, Stack} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const DesktopCv: React.FC = () => {
    const printPage = () => {
        const divContents = document.getElementById(
            'cv-content',
        ) as HTMLElement | null;
        const divHtml = divContents?.innerHTML;
        const a = window.open('', '', 'height=1024, width=1024');
        a?.document.write('<html>');
        a?.document.write(document?.head.innerHTML);
        a?.document.write('<body>');
        a?.document.write(divHtml ?? '');
        a?.document.write('</body></html>');
        a?.document.close();
        a?.focus();
        a?.print();
        a?.document.close();
        return true;
    };
    const {basics} = cvData;
    const {work} = cvData;

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
                        <Grid item xs></Grid>
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
                    <Grid container className="cv-content--body">
                        {/* Profesional Experience title*/}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    <TipsAndUpdatesIcon />
                                    Profesional Experience
                                </Typography>
                            </Grid>
                        </Container>
                        {/* Profesional Experience companies*/}
                        <Container sx={{marginTop: '20px'}}>
                            <Grid container>
                                {work.map(company => {
                                    return (
                                        <>
                                            <Grid xs={4}>
                                                <Box className="cv-experience--places">
                                                    <Typography variant="h6">
                                                        {company.position}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography variant="h6">
                                                        {company.name}
                                                    </Typography>
                                                </Box>
                                                <Box className="cv-experience--places">
                                                    <Typography variant="h6">
                                                        {company.startDate}-
                                                        {company.endDate}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={8}>
                                                <Box sx={{width: '100%'}}>
                                                    <Stack>
                                                        {company.highlights.map(
                                                            hightlight => (
                                                                // eslint-disable-next-line react/jsx-key
                                                                <Typography variant="inherit">
                                                                    {hightlight}
                                                                </Typography>
                                                            ),
                                                        )}
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                        </>
                                    );
                                })}
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
