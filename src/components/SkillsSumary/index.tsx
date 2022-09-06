import React from 'react';
import {GET_SKILLS} from '../../graphql/query/introdutionSkill';
import {useQuery} from '@apollo/client';
import {Skills} from '../../contracts/Skills';
import Grid from '@mui/material/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const SkillsSumary: React.FC = () => {
    const {loading, error, data} = useQuery<Skills>(GET_SKILLS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! ${error.message}</p>;
    return (
        <>
            <Grid
                container
                spacing={0}
                alignContent="center"
                sx={{
                    backgroundColor: '#98B9F2',
                    padding: '30px 30px 30px 30px',
                    minHeight: '50vh',
                }}>
                <Grid item xl={7} lg={8} md={6} sm={12} xs={12}>
                    <Stack spacing={3}>
                        <Typography variant="h4">
                            What Do I enjoy what I do?
                        </Typography>
                        {data.introductionSkills.map((skill, index) => (
                            <Typography variant="h5" key={index}>
                                {skill.description}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xl={5} lg={4} md={6} sm={12} xs={12}>
                    <Box textAlign="center" sx={{paddingTop: '35'}}>
                        <Box
                            sx={{
                                fontSize: '10rem',
                                textAlign: 'center',
                                display: 'inline',
                                color: '#e27e02',
                            }}>
                            <Typography variant="string">12</Typography>
                        </Box>
                        <Box sx={{display: 'inline', color: '#e27e02'}}>
                            <Typography variant="string">years</Typography>
                        </Box>
                    </Box>
                    <Box sx={{fontSize: '1.4rem', textAlign: 'center'}}>
                        <Typography variant="string">
                            of exciting web development journey
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SkillsSumary;
