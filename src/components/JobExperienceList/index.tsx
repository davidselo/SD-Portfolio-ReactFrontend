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

interface Props {
    work: [
        {
            name: string;
            position: string;
            url?: string;
            startDate: string;
            endDate: string;
            summary: string;
            highlights: string[];
        },
    ];
}

const JobExperienceList: React.FC<Props> = ({work}) => {
    return (
        <>
            {/* Profesional Experience title*/}
            <Container sx={{marginTop: '10px'}}>
                <Grid xs={12}>
                    <Typography variant="h5">
                        <Box sx={{display: 'flex', flexDirection: 'row'}}>
                            <TipsAndUpdatesIcon />
                            <Box sx={{marginLeft: '10px'}}>
                                PROFESIONAL EXPERIENCE
                            </Box>
                        </Box>
                    </Typography>
                </Grid>
            </Container>
            {/* Profesional Experience companies*/}
            <Container sx={{marginTop: '10px'}}>
                {work.map(company => {
                    return (
                        <>
                            <Grid container sx={{marginTop: '10px'}}>
                                <Grid xs={4}>
                                    <Box className="cv-experience--places">
                                        <Typography
                                            variant="h6"
                                            component="div"
                                        >
                                            <Box sx={{fontWeight: 'bold'}}>
                                                {company.position}
                                            </Box>
                                        </Typography>
                                    </Box>
                                    <Box className="cv-experience--places">
                                        <Typography>{company.name}</Typography>
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
                                        <List
                                            dense
                                            sx={{
                                                paddingTop: 'unset',
                                                paddingBottom: 'unset',
                                                listStyleType: 'disc',
                                                pl: 4,
                                            }}
                                        >
                                            {company.highlights.map(
                                                hightlight => (
                                                    <>
                                                        <ListItem
                                                            dense
                                                            sx={{
                                                                paddingTop:
                                                                    'unset',
                                                                paddingBottom:
                                                                    'unset',
                                                                display:
                                                                    'list-item',
                                                                paddingLeft:
                                                                    'unset',
                                                            }}
                                                        >
                                                            <ListItemText
                                                                primary={
                                                                    hightlight
                                                                }
                                                                inset={false}
                                                            />
                                                        </ListItem>
                                                    </>
                                                ),
                                            )}
                                        </List>
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    );
                })}
            </Container>
        </>
    );
};

export default JobExperienceList;
