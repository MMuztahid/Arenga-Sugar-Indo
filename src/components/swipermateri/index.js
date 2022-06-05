import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Navigation } from "swiper";
import { Container, Typography } from "@mui/material";

function Materi() {
  return (
    <>
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
            alignText: 'justify'
            
          }}>
            Many people think arenga sugar and coconut palm sugar are the same. Arenga sugar and
            coconut palm sugar have differences in taste, colour, and ingredients. Coconut palm 
            sugar is made from the juice or as we call it nira of the stems of palm or coconut trees
            and the sweetness of palm sugar is more suitable and commonly used as a sweetener in  
            Indonesian tradisional food, such as rujak’s seasoning, pempek’s cuko and added to chili  
            sauce to balance the spiciness from the chili and the colour of the coconut palm sugar is 
            dark brown.
          </Typography></Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container maxWidth='md'>
          <Typography variant="h6" sx={{
            fontFamily: `Calibri`,
            color: 'black',
            alignText: 'justify'
            
          }}>
            Meanwhile, arenga sugar is made from nira of arenga tree which is the family of palm trees. 
            Arenga sugar has a brownish yellow colour with a sweeter taste and stronger aroma than palm 
            sugar. The texture is also thicker than palm sugar when melted. Therefore, arenga sugar is 
            preferred to be used as glaze in cakes or traditional desserts or drinks, such as ‘Bubur 
            Sumsum’ or ‘Es Dawet’. Recently, arenga sugar as become popular as an ingredient for boba 
            drinks and iced coffee. Arenga sugar also has a burnt or charred taste sensation, which made 
            it has a deeper variety of flavors than palm sugar. Although these two types of sugar are 
            obtained from different trees, the process of making both sugar are fairly the same. Nira is 
            collected, then slowly heated until thickened. The caramelization process when heated, gives 
            the arenga sugar a brown colour.
          </Typography></Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container maxWidth='md'>
          <Typography variant="h6" sx={{
            fontFamily: `Calibri`,
            color: 'black',
            alignText: 'justify'
            
          }}>
            Arenga sugar is made from nira which derived from arenga trees. The tree shaped like palm 
            trees, that is why it also called palm sugar. Meanwhile, brown sugar is made from sugarcane 
            extract that crystallized, just like granulated sugar. The difference is brown sugar is added 
            molasses syrup in the process of making it, that made the sugar brown in colour. Although 
            both are brown coloured, the colour of arenga sugar is more concentrated. This is obtained 
            from the manufacturing process which goes through long enough heating. While the colour of 
            brown sugar is clear brown.
          </Typography></Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container maxWidth='md'>
          <Typography variant="h6" sx={{
            fontFamily: `Calibri`,
            color: 'black',
            alignText: 'justify'
            
          }}>
            Arenga sugar has a distinctive taste that is different from other sweeteners. The sweetness 
            is not overpowering and there is a slightly bitter sensation. Meanwhile the brown sugar has 
            a similar taste to regular granulated sugar. The difference is that brown sugar has a slight 
            aroma of caramel and roasted sugar. In the manufacturing process, arenga sugar usually gets 
            the addition of other ingredients such as granulated sugar to enhance the sweetness. We are 
            providing this option, given the high demand for mixed arenga sugar from our partners. This 
            mixed arenga sugar product does not change the aroma and form of our pure arenga sugar.
          </Typography></Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Materi
