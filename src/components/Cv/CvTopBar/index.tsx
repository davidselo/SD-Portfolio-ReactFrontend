import {Button, FormControlLabel, Grid, Switch} from '@mui/material';
import React from 'react';
import {printPage} from 'helper/printPage';

export const CvTopBar = ({setAddNotes}: any) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAddNotes(event.target.checked);
    };

    return (
        <Grid container>
            <Grid item xs={6} />
            <Grid item xs={6}>
                <Grid container>
                    <Grid item xs={4}>
                        <Button
                            className="cv--print-button"
                            variant="contained"
                            onClick={printPage}
                        >
                            Print CV
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={
                                <Switch
                                    onChange={event => handleChange(event)}
                                />
                            }
                            label="Add Notes"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Switch />}
                            label="Extended"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
