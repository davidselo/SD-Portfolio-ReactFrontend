import {Typography} from '@material-ui/core';
import {Box, Container, Grid, Stack} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';

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
                    <Grid container className="cv-content--header">
                        <Grid xs></Grid>
                        <Grid xs={10}>
                            <Box textAlign="center" minHeight="120px">
                                <Typography variant="h4">
                                    David Villalba Flores
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid xs></Grid>
                    </Grid>
                    {/* CV Body */}
                    <Grid container className="cv-content--body">
                        {/* Profesional Experience title*/}
                        <Container>
                            <Grid xs={12}>
                                <Typography variant="h5">
                                    Profesional Experience
                                </Typography>
                            </Grid>
                        </Container>
                        {/* Profesional Experience companies*/}
                        <Container>
                            <Grid container>
                                <Grid xs={4}>
                                    <Box className="cv-experience--places">
                                        <Typography variant="h6">
                                            Company 1
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={8}>
                                    <Box sx={{width: '100%'}}>
                                        <Stack>
                                            <Typography variant="h6">
                                                Item 1
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 2
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 3
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Box className="cv-experience--places">
                                        <Typography variant="h6">
                                            Company 1
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={8}>
                                    <Box sx={{width: '100%'}}>
                                        <Stack>
                                            <Typography variant="h6">
                                                Item 1
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 2
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 3
                                            </Typography>
                                        </Stack>
                                    </Box>
                                </Grid>
                                <Grid xs={4}>
                                    <Box className="cv-experience--places">
                                        <Typography variant="h6">
                                            Company 1
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={8}>
                                    <Box sx={{width: '100%'}}>
                                        <Stack>
                                            <Typography variant="h6">
                                                Item 1
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 2
                                            </Typography>
                                            <Typography variant="h6">
                                                Item 3
                                            </Typography>
                                        </Stack>
                                    </Box>
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
