import React from 'react';
import { Button, IconButton, Box, Grid, Typography } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../css/ContactMe.css';

export const ContactMe = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/Julian Navarro.pdf';
        link.download = 'Julian Navarro.pdf';
        link.click();
    };

    return (
        <Grid className="contacMe-container" m={5}>
            <Grid container className="contacMe" spacing={3} sx={{ marginLeft: 0, marginTop: 0}}>
                <Typography variant="h6" align="center" className="title-content" gutterBottom>
                    CONTACT ME
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Box className="icon-container">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <IconButton
                                color="primary"
                                component="a"
                                href="https://www.linkedin.com/in/julian-santiago-navarro-mart%C3%ADnez-844963203/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-button"
                            >
                                <LinkedInIcon className="icon" />
                            </IconButton>
                            <Typography variant="body2">LinkedIn</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <IconButton
                                color="inherit"
                                component="a"
                                href="https://github.com/JulianNavarro159"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-button"
                            >
                                <GitHubIcon className="icon" />
                            </IconButton>
                            <Typography variant="body2">GitHub</Typography>
                        </Box>
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <IconButton
                                color="success"
                                component="a"
                                href="https://wa.me/573005789052"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-button"
                            >
                                <WhatsAppIcon className="icon" />
                            </IconButton>
                            <Typography variant="body2">WhatsApp</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<GetAppIcon />}
                            onClick={handleDownloadCV}
                            className="download-button"
                        >
                            Mi CV
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};
