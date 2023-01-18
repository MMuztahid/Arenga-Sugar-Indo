import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ThemeProvider, createTheme } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

import { FreeMode, Navigation, Thumbs } from "swiper";

import Foto1 from "../imagegallery/1.jpg";
import Foto2 from "../imagegallery/2.jpg";
import Foto3 from "../imagegallery/3.jpg";
import Foto4 from "../imagegallery/4.png";
import Foto5 from "../imagegallery/5.png";
import Foto6 from "../imagegallery/6.png";
import Foto7 from "../imagegallery/7.png";
import Foto8 from "../imagegallery/8.png";
import Foto9 from "../imagegallery/9.jpg";
import Foto10 from "../imagegallery/10.jpeg";
import Foto11 from "../imagegallery/11.jpeg";
import Foto12 from "../imagegallery/12.jpeg";

const theme = createTheme();

function SwiperGallery() { 
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    return (
        <ThemeProvider theme={theme}>
            <Swiper 
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",}}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
                <SwiperSlide>
                    <img src={Foto1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto9} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto10} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto11} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto12} alt="" />
                </SwiperSlide>
            </Swiper>
            <Swiper
            onSwiper={setThumbsSwiper}
            loop = {true}
            spaceBetween = {2}
            slidesPerView = {3}
            freeMode = {true}
            watchSlidesProgress = {true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Foto1} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto2} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto3} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto4} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto5} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto6} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto7} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto8} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto9} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto10} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto11} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Foto12} alt=""/>
                </SwiperSlide>
            </Swiper>
        </ThemeProvider>
    );
};

export default SwiperGallery;

