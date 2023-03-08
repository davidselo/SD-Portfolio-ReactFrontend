import {Box, Container, Button} from '@mui/material';
import React from 'react';
import './styles.scss';
import * as cvData from 'data/staticData/cv/default.json';

import CvHeader from 'components/Cv/CvHeader';
import CvBody from 'components/Cv/CvBody';

const DesktopCv: React.FC = () => {
    const printPage = () => {
        window.print();
        return;
    };
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
