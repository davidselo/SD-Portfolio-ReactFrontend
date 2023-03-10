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

            <Grid container sx={{marginTop: '10px'}}>
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <CvSectionTitle
                            title="expertise"
                            iconComponent={<SettingsIcon />}
                        />
                        <Typography variant="body2" sx={{marginTop: '10px'}}>
                            {basics.summary}
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <EducationCard education={education} />
                    </Grid>

                    <Grid item xs={4}>
                        <LanguageCard languages={languages} />
                    </Grid>
                </Grid>

                <Container disableGutters sx={{marginTop: '10px'}}>
                    <CvSectionTitle
                        title="skills"
                        iconComponent={<PsychologyIcon />}
                    />
                </Container>

                <Container disableGutters>
                    <Grid item xs={12}>
                        <SkillList skills={skills} />
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
};

export default CvBody;
