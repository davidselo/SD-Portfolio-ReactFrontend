import React from 'react';
import Grid from '@mui/material/Grid';
import {GET_SKILLS} from '../../graphql/query/introdutionSkill';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import useQueryFacade from 'data/hooks/useQueryFacade';
import {SkillItem} from 'contracts/Skills';

const SkillsSumary: React.FC = () => {
    const {loading, error, data} = useQueryFacade('SKILLS', GET_SKILLS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error! {error.message}</p>;
    return (
        <>
            <Grid
                container
                spacing={0}
                alignContent="center"
                rowSpacing={5}
                sx={{
                    backgroundColor: '#98B9F2',
                    padding: '30px 30px 30px 30px',
                    minHeight: '50vh',
                }}
            >
                <Grid item xl={7} lg={8} md={6} sm={12} xs={12}>
                    <Stack spacing={3}>
                        <Typography variant="h4">
                            Why Do I enjoy what I do?
                        </Typography>
                        {data?.introductionSkills.map(
                            (
                                skill: SkillItem,
                                index: React.Key | null | undefined,
                            ) => (
                                <Typography variant="h5" key={index}>
                                    {skill?.description}
                                </Typography>
                            ),
                        )}
                    </Stack>
                </Grid>
                <Grid item xl={5} lg={4} md={6} sm={12} xs={12}>
                    <Box textAlign="center" paddingTop="50">
                        <Box
                            sx={{
                                display: 'inline',
                                color: '#e27e02',
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: '11rem',
                                    textAlign: 'center',
                                    display: 'inline',
                                    color: '#e27e02',
                                    lineHeight: '0.9',
                                }}
                            >
                                12
                            </Typography>
                        </Box>
                        <Box sx={{display: 'inline', color: '#e27e02'}}>
                            <Typography component="span">years</Typography>
                        </Box>
                        <Box sx={{fontSize: '1.4rem', textAlign: 'center'}}>
                            <Typography component="span">
                                of exciting web development journey
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SkillsSumary;
