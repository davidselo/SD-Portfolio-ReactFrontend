import React from 'react';

// MU Imports
import {Box, SvgIcon, Typography} from '@mui/material';

interface Props {
    title: string;
    iconComponent: React.ReactNode;
}

export const CvSectionTitle: React.FC<Props> = ({
    title,
    iconComponent,
}: Props) => {
    return (
        <Typography variant="h6">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}
            >
                {iconComponent}
                <Box
                    sx={{
                        marginLeft: '10px',
                        fontWeight: 'bold',
                    }}
                >
                    {title.toUpperCase()}
                </Box>
            </Box>
        </Typography>
    );
};
