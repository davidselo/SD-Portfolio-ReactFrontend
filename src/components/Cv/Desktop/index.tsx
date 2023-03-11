// Import React
import React, {useEffect, useState} from 'react';

import {useSearchParams} from 'react-router-dom';

// Import Material UI Components.
import {Box, Container, Button, Grid, TextareaAutosize} from '@mui/material';
import NoteIcon from '@mui/icons-material/Note';

// Import styles.
import './styles.scss';

// Import components.
import CvHeader from 'components/Cv/CvHeader';
import CvBody from 'components/Cv/CvBody';
import {CvTopBar} from '../CvTopBar';

import * as initialCvData from 'data/staticData/cv/default.json';
import {CvSectionTitle} from '../CvSectionTitle';

export async function loadCvData(version = '') {
    switch (version) {
        case 'engineering':
            return await import('data/staticData/cv/engineer.json');
        default:
            return await import('data/staticData/cv/default.json');
    }
}

const DesktopCv: React.FC = () => {
    const [searchParams] = useSearchParams();
    const cvVersion = searchParams.get('cvVersion') || '';

    // State variable.
    const [cvData, setCvData] = useState(initialCvData);
    const [addNotes, setAddNotes] = useState(false);

    useEffect(() => {
        const fetchCvData = async () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const data = await loadCvData(cvVersion);
            const {default: aux} = data;
            setCvData(aux);
        };
        // call the function
        fetchCvData();
    }, [cvVersion]);

    const {basics} = cvData;

    return (
        <Container className="cv--wrapper">
            <Container
                id="cv-topBar"
                disableGutters
                sx={{
                    marginTop: '20px',
                    paddingBottom: '20px',
                }}
                maxWidth="md"
            >
                <CvTopBar setAddNotes={setAddNotes} />
            </Container>

            <Container
                id="cv-content"
                disableGutters
                sx={{
                    marginTop: '20px',
                    backgroundColor: '#ffffff',
                    paddingBottom: '20px',
                }}
                maxWidth="md"
            >
                {/* CV Header */}
                <CvHeader
                    name={basics.name.toUpperCase()}
                    email={basics.email}
                    phone={basics.phone}
                />

                {/* CV Body */}
                <Container sx={{marginTop: '30px'}}>
                    <Grid container>
                        <Grid item xs={addNotes ? 4 : 1}>
                            {addNotes && (
                                <>
                                    <CvSectionTitle
                                        title="Notes"
                                        iconComponent={<NoteIcon />}
                                    />

                                    <TextareaAutosize
                                        style={{
                                            //resize: 'vertical',
                                            border: 'none',
                                            overflow: 'auto',
                                            outline: 'none',
                                            boxShadow: 'none',
                                            resize: 'none',
                                            fontFamily: 'Raleway',
                                            marginTop: '10px',
                                        }}
                                        placeholder="Please Add your notes in here"
                                    ></TextareaAutosize>
                                </>
                            )}
                        </Grid>
                        <Grid item xs={addNotes ? 8 : 11}>
                            <CvBody cvData={cvData} />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container>
                <Box textAlign="center" marginTop="20px">
                    <Button
                        className="cv--print-button"
                        variant="contained"
                        //onClick={printPage}
                    >
                        Print CV
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};

export default DesktopCv;
