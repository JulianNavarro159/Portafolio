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
        <Grid className='contacMe-container' m={5}>
            <Grid container className='contacMe' spacing={3} sx={{ marginLeft: 0, marginTop: 0 }}>
                <Grid xs={12} className="title-content">
                    <Typography variant="h6">CONTACT ME</Typography>
                </Grid>
                <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
                    <Box className='icon-container' display="flex" justifyContent="center" gap={2}>
                        <Box display="flex" flexDirection="column" alignItems="center" className='icon'>
                            <IconButton
                                color="primary"
                                component="a"
                                href="https://www.linkedin.com/in/julian-santiago-navarro-mart%C3%ADnez-844963203/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' } }}
                            >
                                <LinkedInIcon sx={{ fontSize: 'inherit' }} />
                            </IconButton>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>LinkedIn</Typography>
                        </Box>

                        <Box display="flex" flexDirection="column" alignItems="center" className='icon'>
                            <IconButton
                                color="inherit"
                                component="a"
                                href="https://github.com/JulianNavarro159"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' } }}
                            >
                                <GitHubIcon sx={{ fontSize: 'inherit' }} />
                            </IconButton>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>GitHub</Typography>
                        </Box>

                        <Box display="flex" flexDirection="column" alignItems="center" className='icon'>
                            <IconButton
                                color="success"
                                component="a"
                                href="https://wa.me/573005789052"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' } }}
                            >
                                <WhatsAppIcon sx={{ fontSize: 'inherit' }} />
                            </IconButton>
                            <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', md: '1rem' } }}>WhatsApp</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<GetAppIcon />}
                            onClick={handleDownloadCV}
                            sx={{ fontSize: { xs: '0.75rem', md: '1rem', lg: '1.25rem' } }}
                        >
                            Mi CV
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};