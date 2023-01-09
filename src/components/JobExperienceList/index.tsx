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
                                        <List dense>
                                            {company.highlights.map(
                                                hightlight => (
                                                    <>
                                                        <ListItem dense>
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
                            </>
                        );
                    })}
                </Grid>
            </Container>
        </>
    );
};

export default JobExperienceList;
