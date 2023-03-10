// React Import
import React from 'react';

// MU imports
import {Container, Grid, Typography} from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';

// Components imports
import LanguageCard from '../LanguageCard';
import EducationCard from '../EducationCard';
import JobExperienceList from 'components/JobExperienceList';
import SkillList from 'components/Cv/SkillList';

// Loading Cv Data
import {JSONResume} from 'contracts/data/jsonResume';
import {CvSectionTitle} from 'components/Cv/CvSectionTitle';

interface Props {
    cvData: JSONResume;
}

const CvBody: React.FC<Props> = ({cvData}: Props) => {
    const {basics} = cvData;
    const {work} = cvData;
    const {education} = cvData;
    const {languages} = cvData;
    const {skills} = cvData;

    return (
        <Grid container className="cv-content--body">
            <JobExperienceList work={work} />
            {/* Expertise, Education & Language. */}
            <Container sx={{marginTop: '15px'}}>
                <Grid container>
                    <Grid container spacing={5}>
                        <Grid item xs={1} />
                        <Grid item xs={4}>
                            <CvSectionTitle
                                title="expertise"
                                iconComponent={<SettingsIcon />}
                            />
                            <Typography
                                variant="body2"
                                sx={{marginTop: '10px'}}
                            >
                                {basics.summary}
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <EducationCard education={education} />
                        </Grid>

                        <Grid item xs={3}>
                            <LanguageCard languages={languages} />
                        </Grid>
                    </Grid>

                    <Grid item xs={1} />
                    <Grid item xs={11}>
                        <CvSectionTitle
                            title="skills"
                            iconComponent={<PsychologyIcon />}
                        />
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} />
                        <Grid item xs={11}>
                            <SkillList skills={skills} />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default CvBody;
