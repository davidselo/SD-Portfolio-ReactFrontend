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
import CvExpertiseCard from 'components/Cv/CvExpertiseCard';

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

            <Grid container sx={{marginTop: '10px'}}>
                {/* Expertise, Education & Language. */}
                <Grid container spacing={5}>
                    <Grid item xs={4}>
                        <CvExpertiseCard basics={basics} />
                    </Grid>
                    <Grid item xs={4}>
                        <EducationCard education={education} />
                    </Grid>
                    <Grid item xs={4}>
                        <LanguageCard languages={languages} />
                    </Grid>
                </Grid>
                {/* Skills Summary*/}
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
