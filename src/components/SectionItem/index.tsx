import {Box, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import exampleImage from 'assets/images/cat-example.jpg';
import PARALLAX_DATA from 'data/staticData/staticParallax';
import {SectionNumber} from 'contracts/Parallax';
interface Props {
    sectionNumber: SectionNumber;
}

export const SectionItem: React.FC<Props> = ({sectionNumber}: Props) => {
    const title = PARALLAX_DATA.data[`${sectionNumber}`].title;
    const body = PARALLAX_DATA.data[`${sectionNumber}`].body;

    return (
        <Container maxWidth="xl">
            <Grid container sx={{height: '100vh', alignContent: 'center'}}>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                    <Box
                        component="img"
                        sx={{
                            width: 600,
                            maxHeight: {
                                xs: 233,
                                md: 167,
                                lg: 600,
                                xl: 600,
                            },
                            maxWidth: {
                                xs: 350,
                                md: 250,
                                lg: 600,
                                xl: 600,
                            },
                        }}
                        alt="Little David"
                        src={exampleImage}
                    />
                </Grid>
                <Grid item xs={12} md={12} lg={6} xl={6}>
                    <Box
                        justifyContent="center"
                        alignItems="center"
                        textAlign="center"
                    >
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h3">{title}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box marginTop="20px">
                                    <Typography variant="h5">{body}</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SectionItem;
