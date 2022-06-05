import React from "react";
import { Box, Container, Divider,  Typography } from "@mui/material";
import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";
import FotoIndo from '../../components/media/7.png';
import Tokped from '../../components/media/logo-tokped.png';
import Shopee from '../../components/media/logo-shopee.png';
import TikTok from '../../components/media/logo-tiktok.png';

function Distro() {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      background: '#ffdead',
      paddingTop: '100px'
    }}>
      <TopBar id="top-nav"></TopBar>
      <Container sx={{
        width: '100%',
        height: '1200px'
      }}>
        <Typography variant='h2' gutterBottom component="div" sx={{
          textAlign: 'center',
          color: 'black',
          fontFamily: `Roboto`,
          marginBottom: '80px'
        }}>
          Distribution
        </Typography>
        <img src={FotoIndo} alt="distribution map" className="center"/>
        <Divider sx={{
          marginTop: '100px',
          marginBottom: '100px'
        }}></Divider>
        <Typography variant='h2' gutterBottom component="div" sx={{
          textAlign: 'center',
          color: 'black',
          fontFamily: `Roboto`,
          marginBottom: '80px'
        }}>
          Partners
        </Typography>
        <Container spacing={2} sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src={Tokped} alt="partner tokped" width={"250px"} height={'75xpx'} />
          <img src={Shopee} alt="partner shopee" width={"400px"} height={'99px'} />
          <img src={TikTok} alt="partner tiktok" width={"300px"} height={'300px'} />
        </Container>
        
      </Container>
      <WaButton/>    
      <ScrollArrow/>
      <BottomBar/>
    </Box>
    
        );

};

export default Distro;