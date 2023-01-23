import {Grid, List, ListItem, Typography} from '@mui/material';
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
                        <ListItem key={skill.name} dense disableGutters>
                            <Grid container>
                                <Grid item xs={2}>
                                    <Typography variant="body1">
                                        {skill.name}:
                                    </Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <Typography variant="caption">
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
