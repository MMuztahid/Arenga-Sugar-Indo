import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Navigation } from "swiper";
import { Container, Typography } from "@mui/material";

const theme = createTheme();

theme.typography.h6 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

function MateriBenefits() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Swiper 
      loop={true}
      keyboard={{
        enabled: true,
      }}
      navigation={true} 
      modules={[ Keyboard, Navigation]} 
      className="mySwiper1">
        <SwiperSlide>
          <Container maxWidth='md'>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'center',
              marginBottom: '20px',
              fontWeight: '600',
            }}>Maintain blood sugar levels</Typography>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'justify'
            }}>
              Compared to other types of sugar, arenga sugar has low glycaemic index. This means, blood 
              sugar levels do not instantly increase when consuming this arenga sugar. And this is good 
              for diabetics who must keep their blood levels stable. However, there is no research that can 
              confirm that arenga sugar is able to prevent the increase or control blood sugar levels. That 
              is why the benefits of arenga sugar still need to be researched further.
            </Typography>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth='md'>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'center',
              marginBottom: '20px',
              fontWeight: '600',
            }}>Control blood pressure</Typography>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'justify'
            }}>
              High blood pressure or hypertension is a condition that can lead into cause serious 
              complications, such as stroke, heart disease, and kidney disease. For controlling blood 
              pressure, someone needs to live a healthy lifestyle and one of them is reduce salt intake 
              and increase nutritious foods consumption. One of the nutrients in arenga sugar, which is 
              potassium, is known to lower high blood pressure. Even so, you are not advised to fulfil 
              your potassium needs by consuming arenga sugar. Because too much sugar intake can cause 
              tooth decay and obesity.
            </Typography>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth='md'>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'center',
              marginBottom: '20px',
              fontWeight: '600',
            }}>Maintain bone health</Typography>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'justify'
            }}>
              Potassium is known to be good for bone health. A study shows that adequate intake of 
              potassium everyday can maintain a balance of calcium levels in the bones and will reduce 
              the risk of osteoporosis. However, so far there has been no research that can confirm the 
              effectiveness of arenga sugar in maintaining bone health. Therefore, you need to fulfil 
              your vitamin D and potassium needs and exercise regularly to keep your bones healthy.             
            </Typography>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <Container maxWidth='md'>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'center',
              marginBottom: '20px',
              fontWeight: '600',
            }}>Reduce the risk of kidney stones</Typography>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              alignText: 'justify'
            }}>
              Kidney stones consist of several types and one of them is formed by deposits of calcium. 
              A study states that lack of potassium intake can increase the risk of calcium deposits 
              forming in the kidneys, causing kidney stones. To prevent kidney stones, you are advised 
              to fulfil your potassium needs every day. The recommended daily intake of potassium for 
              adults is about 3,500-4,700mg. You can also get the potassium nutrition by consuming palm 
              sugar.
            </Typography>
          </Container>
        </SwiperSlide>
      </Swiper>
      </ThemeProvider>
    </>
  );
}

export default MateriBenefits;
