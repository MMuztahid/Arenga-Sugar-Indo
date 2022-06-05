import React from "react";
// Import Swiper React components
import {  Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./styles.css";
import Foto1 from '../../components/media/1-nbg.png';
import Foto2 from '../../components/media/2-nbg.png';
import Foto3 from '../../components/media/3-nbg.png';

// import required modules
import { EffectFade, Keyboard, Navigation } from "swiper";
import { useNavigate } from 'react-router-dom';

function Materi() {
    const navigate = useNavigate();
    return (
        <>
            <Swiper
            spaceBetween={30}  
            effect={"fade"}
            loop={true}
            keyboard={{
                enabled: true,
            }}
            navigation={true} modules={[ EffectFade, Keyboard, Navigation]} 
            className="mySwiper2">
                    <SwiperSlide onClick={() => navigate('/product')}>
                        <img src={Foto1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => navigate('/product')}>
                        <img src={Foto2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide onClick={() => navigate('/product')}>
                        <img src={Foto3} alt=""/>
                    </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Materi;
