import React, {useRef} from 'react';
import {jsPDF} from 'jspdf';
import {Avatar, Box, Container, Typography} from '@mui/material';
import {deepOrange} from '@mui/material/colors';
import './styles.scss';

const DesktopCv: React.FC = () => {
    const pdfRef = useRef(null);

    const handleDownload = () => {
        const content = pdfRef.current;

        const doc = new jsPDF('p', 'mm', 'a4');
        doc.html(content ?? '', {
            callback: function (doc) {
                //doc.save('sample.pdf');
                doc.output('dataurlnewwindow');
            },
        });
    };
    const printPage = () => {
        const divContents = document.getElementById(
            'GFG',
        ) as HTMLElement | null;
        const divHtml = divContents?.innerHTML;
        const a = window.open('', '', 'height=1024, width=1024');
        a?.document.write('<html>');
        a?.document.write(document?.head.innerHTML);
        a?.document.write('<body >');
        a?.document.write(divHtml ?? '');
        a?.document.write('</body></html>');
        a?.document.close();
        a?.focus();
        a?.print();
        a?.document.close();
        return true;
    };

    return (
        <>
            <div>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        backgroundColor: 'red',
                        minHeight: '100vh',
                        minWidth: '100vh',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <button onClick={handleDownload}>Download</button>
                    <button onClick={printPage}>Print Page</button>
                    <Container id="GFG" ref={pdfRef} disableGutters>
                        <Box
                            sx={{
                                backgroundColor: '#98b9f2',
                                height: 300,
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
                            <Typography variant="h2">
                                David Villalba Flores
                            </Typography>
                        </Box>
                        <div className="wrapper">
                            <h4>David Villalba Flores</h4>
                            <div className="left">
                                <p>This goes on the left</p>
                            </div>
                            <div className="middle">
                                <p>This goes in the middle</p>
                            </div>
                            <div className="right">
                                <p>This goes on the right</p>
                                <div style={{backgroundColor: 'blue'}}>
                                    <p>Inside right</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Container>
                <footer></footer>
            </div>
        </>
    );
};

export default DesktopCv;
