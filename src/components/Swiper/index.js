import React from 'react';
import { Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import 'swiper/css';
import "swiper/css/effect-fade";
import { EffectFade } from 'swiper';
import './style.css'
import Foto1 from '../imagegallery/2.jpg';

const theme = createTheme();

theme.typography.h5 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};


function SlideSweeper(){
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
        <Swiper
            spaceBetween={30}
            effect={"fade"}            
            modules={[ EffectFade ]}
            className="mySwiper"
        >    
            <SwiperSlide onClick={() => navigate('/aboutarenga')}>  
                <img src={Foto1}  alt="" /> 
                <Container maxWidth="md">
                    <Typography variant='h5' sx={{
                        color: "#eee",
                        fontFamily: `Roboto`,
                        fontWeight: '600',
                    }}>
                    Arenga Sugar Indo is a company that established in 2022 and domiciled in Kabupaten Bogor, West Java, Indonesia. 
                    We are engaged on providing arenga products and their derivatives to the local and international market. 
                    Starting from our desire to promotes local products, we chose to focus in arenga and its derivatives to be traded. 
                    Although our company is relatively 	new, we are committed to provide the best arenga sugar from our local Indonesian farmers to our customer.
                    </Typography>   
                </Container>    
            </SwiperSlide>
        </Swiper>
        </ThemeProvider>
    );
};


export default SlideSweeper;
