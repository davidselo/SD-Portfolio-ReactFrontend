import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

interface Props {
    name: string;
    email: string;
    phone: string;
}

const CvHeader: React.FC<Props> = ({name, email, phone}: Props) => {
    return (
        <Grid
            container
            alignContent="center"
            justifyContent="center"
            className="cv-content--header"
            paddingBottom="20px"
        >
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={10}>
                    <Box
                        textAlign="center"
                        marginTop="20px"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography variant="h4">{name}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} />
            </Grid>
            <Grid container sx={{marginTop: '6px'}}>
                <Grid item xs={4} />
                <Grid item xs={4}>
                    <Box sx={{paddingLeft: '31px'}}>
                        <Typography variant="h6">
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <EmailIcon
                                    fontSize="inherit"
                                    sx={{paddingTop: '6px'}}
                                />

                                <Box sx={{marginLeft: '5px'}}>{email}</Box>
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={3}>
                    <Typography variant="h6">
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <PhoneIphoneIcon
                                fontSize="inherit"
                                sx={{paddingTop: '7px'}}
                            />

                            <Box>{phone}</Box>
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CvHeader;
