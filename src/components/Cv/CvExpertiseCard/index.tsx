import {Typography} from '@mui/material';
import React from 'react';

// Components imports
import {CvSectionTitle} from '../CvSectionTitle';

// MU Imports
import SettingsIcon from '@mui/icons-material/Settings';
import {Basics} from 'contracts/data/jsonResume';

interface Props {
    basics: Basics;
}

export const CvExpertiseCard: React.FC<Props> = ({basics}: Props) => {
    return (
        <>
            <CvSectionTitle
                title="expertise"
                iconComponent={<SettingsIcon />}
            />
            <Typography variant="body2" sx={{marginTop: '10px'}}>
                {basics.summary}
            </Typography>
        </>
    );
};

export default CvExpertiseCard;
