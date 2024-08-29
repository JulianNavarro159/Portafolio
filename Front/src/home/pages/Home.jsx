import { Box, Grid, Typography } from "@mui/material";
import fotoPerfil2 from '/assets/Foto-perfil-2.png';
import '../css/Home.css';

export const Home = () => {
    return (
        <Grid className="home-container" m={1} marginTop={5}>
            <Grid container className='container' spacing={2} sx={{ marginLeft: 0, marginTop: 0}}>
                <Grid item xs={12} md={6} className='text-container' m={1} sx={{ paddingLeft: 0, paddingTop: 0 }}>
                    <Grid className="title-home">
                        <Typography 
                            variant="h6"
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' },
                            }}
                        >
                            Full-Stack Developer
                        </Typography>
                    </Grid>
                    <Typography 
                        variant="h4"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '3rem', md: '3rem' },
                            marginBottom: '1rem'
                        }}
                    >
                        Hola 👋! Soy Julián Navarro
                        Desarrollador Web
                    </Typography>
                    <Typography 
                        className="text" 
                        variant="body1"
                        sx={{
                            fontSize: { xs: '0.7rem', sm: '1rem', md: '1.2rem' },
                        }}
                    >
                        Full Stack Developer con experiencia en automatización y desarrollo de aplicaciones web. Poseo sólidos conocimientos en diseño e integración de automatismos mecatrónicos, así como en programación orientada a objetos con Java. Amplia experiencia en desarrollo de Front-end y Back-end utilizando tecnologías como JavaScript, React, Redux, Node.js, Express.js, SQL y Sequelize. Fuerte capacidad para el trabajo en equipo y aprendizaje ágil.
                    </Typography>
                </Grid>
                <Grid xs={12} md={5} className='img-container' sx={{ paddingLeft: 0, paddingTop: 0 }}>
                    <img className="img" src={fotoPerfil2} alt="Foto de perfil" />
                </Grid>
            </Grid>
        </Grid>
    );
};
