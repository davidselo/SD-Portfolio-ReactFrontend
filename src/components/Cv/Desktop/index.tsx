// Import React
import React, {useEffect, useState} from 'react';

import {useParams, useSearchParams} from 'react-router-dom';

// Import Material UI Components.
import {Box, Container, Button} from '@mui/material';

// Import styles.
import './styles.scss';

// Import components.
import CvHeader from 'components/Cv/CvHeader';
import CvBody from 'components/Cv/CvBody';

import * as initialCvData from 'data/staticData/cv/default.json';

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

    const printPage = () => {
        window.print();
        return;
    };

    useEffect(() => {
        const fetchCvData = async () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const data = await loadCvData(cvVersion);
            const {default: aux} = data;
            setCvData(aux);
        };
        // call the function
        fetchCvData();
    }, []);

    const {basics} = cvData;

    return (
        <Container className="cv--wrapper">
            <Container>
                <Box textAlign="center" marginTop="20px">
                    <Button
                        className="cv--print-button"
                        variant="contained"
                        onClick={printPage}
                    >
                        Print CV
                    </Button>
                </Box>
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
                <CvBody />
            </Container>
            <Container>
                <Box textAlign="center" marginTop="20px">
                    <Button
                        className="cv--print-button"
                        variant="contained"
                        onClick={printPage}
                    >
                        Print CV
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};

export default DesktopCv;
