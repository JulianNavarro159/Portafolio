import { Box, Grid, Typography } from "@mui/material";
import { QrUI } from "../../ui/QrUI";
import fotoPerfil2 from '../../assets/Foto-perfil-2.png';
import '../css/Home.css';

export const Home = () => {
    return (
        <QrUI>
            <Grid m={3}>
                <Box className='container'>
                    <Box className='text-container'>
                        <Typography className="title">FullStack Developer</Typography>
                        <Typography variant="h4">Hola 👋! Soy Julián Navarro
                        Desarrollador Web</Typography>
                        <Typography className="text" variant="body1">
                            Full Stack Developer con experiencia en automatización y desarrollo de aplicaciones web. Poseo sólidos conocimientos en diseño e integración de automatismos mecatrónicos, así como en programación orientada a objetos con Java. Amplia experiencia en desarrollo de Front-end y Back-end utilizando tecnologías como JavaScript, React, Redux, Node.js, Express.js, SQL y Sequelize. Fuerte capacidad para el trabajo en equipo y aprendizaje ágil.
                        </Typography>
                    </Box>
                    <Box className='img-container'>
                        <img className="img" src={fotoPerfil2} alt="Foto de perfil" />
                    </Box>
                </Box>
            </Grid>
        </QrUI>
    );
};
