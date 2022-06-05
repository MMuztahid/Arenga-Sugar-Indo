import React from "react";
import {Box, Container, Typography} from "@mui/material";
import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";

function About() {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      background: '#ffdead',
      paddingTop: '100px'
    }}>
      <TopBar id="top-nav"></TopBar>
      <Container maxWidth="lg">
        <Typography variant='h2' gutterBottom component="div">
          Contact & Gallery
        </Typography>
      </Container>
      <WaButton/>
      <ScrollArrow/>
      <BottomBar/> 

    </Box>
    
  );
};

export default About;