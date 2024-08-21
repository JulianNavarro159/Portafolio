import { Box, Button, Grid, Link, Typography } from '@mui/material';
import '../css/Projects.css';
import { useRef } from 'react';

export const Projects = () => {
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);

    const handleMouseOver = (videoRef) => {
        videoRef.current.play();
    };

    const handleMouseOut = (videoRef) => {
        videoRef.current.pause();
    };

    return (
        <Grid className='container' m={5}>
            <Grid container className='container-project' spacing={3} sx={{ marginLeft: 0, marginTop: 0}}>
                    <Grid xs={12} className="title-content">
                        <Typography variant="h6">Proyectos</Typography>
                    </Grid>
                <Grid className='projects-container' sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Box className="video-content">
                        <Typography variant='h6' className="title-projets">E-commerce Tech</Typography>
                        <video 
                            className='video'
                            ref={videoRef1}
                            loop
                            muted
                            onMouseOver={() => handleMouseOver(videoRef1)} 
                            onMouseOut={() => handleMouseOut(videoRef1)}
                        >
                            <source src='public/assets/Video E_commerce.mp4' />
                        </video>
                        <Box className="button-content">
                            <Button>
                                <Link 
                                    sx={{ color: 'white'}} 
                                    underline="none" 
                                    href="https://ecommerce-frontend-wine-nu.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Desplegar
                                </Link>
                            </Button>
                            <Button>
                                <Link 
                                    sx={{ color: 'white'}} 
                                    underline="none" 
                                    href="https://github.com/JulianNavarro159/ecommerce_frontend" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Codigo
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                    <Box className="video-content">
                        <Typography variant='h6' className="title-projets">Página de Artesanías</Typography>
                        <video 
                            className='video'
                            ref={videoRef2}
                            loop
                            muted
                            onMouseOver={() => handleMouseOver(videoRef2)} 
                            onMouseOut={() => handleMouseOut(videoRef2)}
                        >
                            <source src='public/assets/ca90875419bb4b0bb98624380a89cfee.mp4' />
                        </video>
                        <Box className="button-content">
                            <Button>
                                <Link 
                                    sx={{ color: 'white'}} 
                                    underline="none" 
                                    href="https://pagina-artesan-as.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Desplegar
                                </Link>
                            </Button>
                            <Button>
                                <Link 
                                    sx={{ color: 'white'}} 
                                    underline="none" 
                                    href="https://github.com/JulianNavarro159/Pagina_Artesan-as" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Codigo
                                </Link>
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
};
