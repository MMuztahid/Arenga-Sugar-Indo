import React from 'react';
import { Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import { Keyboard, EffectFade, Pagination, Navigation } from 'swiper';
import './style.css'
import Foto1 from '../media/3.jpg';
import Foto2 from '../media/4.jpg';
import Foto3 from '../media/5.jpg';
import Foto4 from '../media/6.png';

function SlideSweeper(){
    const navigate = useNavigate();
    return (
        <Swiper
            spaceBetween={30}
            loop={true}
            effect={"fade"}
            navigation={true}
            keyboard={{
                enabled: true,
              }}
            pagination={{
                clickable: true,
            }}
            
            modules={[ Keyboard, EffectFade, Pagination, Navigation]}
            className="mySwiper"
        >    
            <SwiperSlide onClick={() => navigate('/product')}>  
                <img src={Foto1}  alt="" /> 
                <Container maxWidth="md">
                    <Typography variant='h5' sx={{
                    color: "#eee",
                    fontFamily: `Roboto`,
                    fontWeight: '600',
                    }}>
                    Arenga Sugar Indo is a company that established in 2022 and domiciled in Kabupaten Bogor, 	West Java, Indonesia. 
                    we are engaged on providing arenga products and their derivatives to the local and international market. 
                    Starting from our desire to promotes local products, we chose to focus in arenga and its derivatives to be traded. 
                    Although our company is relatively 	new, we are committed to provide the best arenga sugar from our local Indonesian farmers to our customer.
                    </Typography>   
                </Container>    
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate('/product')}>
                <img src={Foto2} alt=""/>
                <Container maxWidth="md">
                    <Typography variant='h5' sx={{
                    color: "#eee",
                    fontFamily: `Roboto`,
                    fontWeight: '600'
                    }}>
                    Arenga Sugar Indo is a company that established in 2022 and domiciled in Kabupaten Bogor, 	West Java, Indonesia. 
                    we are engaged on providing arenga products and their derivatives to the local and international market. 
                    Starting from our desire to promotes local products, we chose to focus in arenga and its derivatives to be traded. 
                    Although our company is relatively 	new, we are committed to provide the best arenga sugar from our local Indonesian farmers to our customer.
                    </Typography>   
                </Container>
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate('/product')}>
                <img src={Foto3} alt=""/>
                <Container maxWidth="md">
                    <Typography variant='h5' sx={{
                    color: "#eee",
                    fontFamily: `Roboto`,
                    fontWeight: '600'
                    }}>
                    Arenga Sugar Indo is a company that established in 2022 and domiciled in Kabupaten Bogor, 	West Java, Indonesia. 
                    we are engaged on providing arenga products and their derivatives to the local and international market. 
                    Starting from our desire to promotes local products, we chose to focus in arenga and its derivatives to be traded. 
                    Although our company is relatively 	new, we are committed to provide the best arenga sugar from our local Indonesian farmers to our customer.
                    </Typography>   
                </Container>
            </SwiperSlide>
            <SwiperSlide onClick={() => navigate('/product')}>
                <img src={Foto4} alt=""/>
                <Container maxWidth="md">
                    <Typography variant='h5' sx={{
                    color: "#eee",
                    fontFamily: `Roboto`,
                    fontWeight: '600'
                    }}>
                    Arenga Sugar Indo is a company that established in 2022 and domiciled in Kabupaten Bogor, 	West Java, Indonesia. 
                    we are engaged on providing arenga products and their derivatives to the local and international market. 
                    Starting from our desire to promotes local products, we chose to focus in arenga and its derivatives to be traded. 
                    Although our company is relatively 	new, we are committed to provide the best arenga sugar from our local Indonesian farmers to our customer.
                    </Typography>   
                </Container>
            </SwiperSlide>
        </Swiper>
    );
};


export default SlideSweeper;
