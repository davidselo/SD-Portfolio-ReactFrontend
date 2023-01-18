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
            {skills.map(skill => {
                return (
                    <List key={skill.name}>
                        <ListItem>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Box sx={{fontWeight: 'bold'}}>
                                        <Typography>{skill.name}:</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography>
                                        {skill.keywords.map(keyword => {
                                            return `${keyword}, `;
                                        })}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                );
            })}{' '}
        </>
    );
};

export default SkillList;
