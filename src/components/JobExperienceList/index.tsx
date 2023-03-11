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
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {Company} from 'contracts/data/jsonResume';
import {CvSectionTitle} from 'components/Cv/CvSectionTitle';

interface Props {
    work: Array<Company>;
}

const JobExperienceList: React.FC<Props> = ({work}) => {
    return (
        <>
            {/* Professional Experience title*/}
            <Container disableGutters>
                <Grid container>
                    <Grid item xs={12}>
                        <CvSectionTitle
                            title="professional experience"
                            iconComponent={<TipsAndUpdatesIcon />}
                        />
                    </Grid>
                </Grid>
            </Container>
            {/* Professional Experience companies*/}
            <Container sx={{marginTop: '10px'}} disableGutters>
                {work.map((company, index) => {
                    return (
                        <Grid
                            container
                            sx={{marginTop: index == 0 ? '0px' : '15px'}}
                            key={company.name}
                        >
                            {/* <Grid item xs={1} /> */}
                            <Grid item xs={3}>
                                <Box className="cv-experience--places">
                                    <Typography variant="body1" component="div">
                                        <Box sx={{fontWeight: 'bold'}}>
                                            {company.position}
                                        </Box>
                                    </Typography>
                                </Box>
                                <Box className="cv-experience--places">
                                    <Typography variant="body1">
                                        {company.name}
                                    </Typography>
                                </Box>
                                <Box className="cv-experience--places">
                                    <Typography variant="body1">
                                        {company.startDate}-{company.endDate}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={8}>
                                <Box
                                    sx={{
                                        width: '100%',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <List
                                        dense
                                        sx={{
                                            paddingTop: 'unset',
                                            paddingBottom: 'unset',
                                            listStyleType: 'disc',
                                            pl: 4,
                                        }}
                                    >
                                        {company.highlights.map(hightlight => (
                                            <ListItem
                                                dense
                                                sx={{
                                                    paddingTop: 'unset',
                                                    paddingBottom: 'unset',
                                                    display: 'list-item',
                                                    paddingLeft: 'unset',
                                                }}
                                                key={hightlight}
                                            >
                                                <ListItemText
                                                    primary={hightlight}
                                                    inset={false}
                                                    sx={{
                                                        marginTop: 'unset',
                                                        marginBottom: 'unset',
                                                    }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Grid>
                        </Grid>
                    );
                })}
            </Container>
        </>
    );
};

export default JobExperienceList;
