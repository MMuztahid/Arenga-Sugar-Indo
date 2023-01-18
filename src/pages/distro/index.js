import React from "react";
import { Box, Container, Divider,  Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";
import FotoIndo from '../../components/media/7.png';
import Tokped from '../../components/media/logo-tokped.png';
import Shopee from '../../components/media/logo-shopee.png';
import TikTok from '../../components/media/logo-tiktok.png';
import '../../App.css';

const theme = createTheme();
theme.typography.h1 = {
  fontSize: '3.5rem',
  '@media (min-width:600px)': {
    fontSize: '3.5em',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '7rem',
  },
};
theme.typography.h2 = {
  fontSize: '2.35rem',
  '@media (min-width:600px)': {
    fontSize: '2.35em',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4.75rem',
  },
};

function Distro() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      width: '100%',
      background: '#ffdead',
      paddingTop: { xs: '6vh', sm: '6vh', md: "10vh" },
      marginTop: { xs: '6vh', sm: '6vh', md: "10vh" },
    }}>
      <TopBar></TopBar>
      <div component="container" sx={{
        width: '100%',
        height: 'fit-content',
        display: 'flex'
      }}>
      <Container sx={{
        width: '100%',
        height: '1200px'
      }}>
        <Typography variant='h1' gutterBottom component="div" sx={{
          textAlign: 'center',
          color: 'black',
          fontFamily: `Sans-seriff`,
          marginBottom: '80px'
        }}>
          Distribution
        </Typography>
        <img src={FotoIndo} alt="distribution map" className="center"/>
        <Divider sx={{
          marginTop: '150px',
          marginBottom: '150px'
        }}></Divider>
        <Typography variant='h2' gutterBottom component="div" sx={{
          textAlign: 'center',
          color: 'black',
          fontFamily: `Sans-seriff`,
          marginBottom: '80px'
        }}>
          Partners
        </Typography>
        <Container spacing={2} sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: "row" },
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={Tokped} alt="partner tokped" width={"250px"} height={'75xpx'} />
          <img className='fotoShopee' src={Shopee} alt="partner shopee"/>
          <img src={TikTok} alt="partner tiktok" width={"300px"} height={'300px'} />
        </Container>
        
      </Container>
      <BottomBar/>
      </div>
      <WaButton/>    
      <ScrollArrow/>
      
    </Box>
    </ThemeProvider>
  );

};

export default Distro;