import {Box, Grid, List, ListItem, Typography} from '@mui/material';
import React from 'react';

interface Skill {
    name: string;
    level: string;
    keywords: string[];
}
interface Props {
    skills: Array<Skill>;
}

const SkillList: React.FC<Props> = ({skills}: Props) => {
    return (
        <>
            <List>
                {skills.map(skill => {
                    return (
                        <ListItem key={skill.name} dense>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography variant="body1">
                                        <Box sx={{fontWeight: 'bold'}}>
                                            {skill.name}:
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="body2">
                                        {skill.keywords.map(
                                            (keyword, index) => {
                                                return `${keyword}${
                                                    index !=
                                                    skill.keywords.length - 1
                                                        ? ','
                                                        : '.'
                                                } `;
                                            },
                                        )}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    );
                })}
            </List>
        </>
    );
};

export default SkillList;
