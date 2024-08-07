import { Box, Button, Grid, Link, Typography } from '@mui/material';
import '../css/Projects.css';
import { useRef } from 'react';

export const Projects = () => {
    const videoRef = useRef(null);

    const handleMouseOver = () => {
        videoRef.current.play();
    };

    const handleMouseOut = () => {
        videoRef.current.pause();
    };

    return (
        <Grid fontFamily='monospace' m={3} sx={{ color: 'white'}}>
            <Typography variant='h4' fontFamily='monospace' className="title">Proyectos</Typography>
            <Box className='content-projects'>
                <Box className="video-content">
                <Typography variant='h6' className="title-projets">E-commerce Tech</Typography>
                    <video 
                        className='video'
                        ref={videoRef}
                        loop
                        muted
                        // controls
                        onMouseOver={handleMouseOver} 
                        onMouseOut={handleMouseOut}
                    >
                        <source src='src/assets/Video E_commerce.mp4' />
                    </video>
                    <Box className="button-content">
                        <Button>
                            <Link sx={{ color: 'white'}} underline="none" href="https://main.d1v4o3mt97tf62.amplifyapp.com/">Desplegar</Link>
                        </Button>
                        <Button>
                            <Link sx={{ color: 'white'}} underline="none" href="https://github.com/JulianNavarro159/ecommerce_frontend">Codigo</Link>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};
