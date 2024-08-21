import React from 'react';
import { Button, IconButton, Box } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export const ContactMe = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/Julian Navarro.pdf'; // Ruta al archivo PDF en la carpeta assets
        link.download = 'Julian Navarro.pdf'; // Nombre del archivo al descargar
        link.click();
    };

    return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>

        <Box display="flex" justifyContent="center" gap={2}>
        <IconButton
            color="primary"
            component="a"
            href="https://www.linkedin.com/in/julian-santiago-navarro-mart%C3%ADnez-844963203/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <LinkedInIcon />
        </IconButton>
        <IconButton
            color="inherit"
            component="a"
            href="https://github.com/JulianNavarro159"
            target="_blank"
            rel="noopener noreferrer"
        >
            <GitHubIcon />
        </IconButton>
        </Box>
        <Button
        variant="contained"
        color="primary"
        startIcon={<GetAppIcon />}
        onClick={handleDownloadCV}
        >
        Mi CV
        </Button>
    </Box>
    );
};