import {Typography} from '@material-ui/core';
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

const DesktopCv: React.FC = () => {
    const printPage = () => {
        window.print();
        return;
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
