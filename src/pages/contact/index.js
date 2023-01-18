import React from "react";
import { Box, Container, Typography, Link, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";

import FP1 from '../../components/media/FP1.png';
import FP2 from '../../components/media/FP2.png';
import FP3 from '../../components/media/FP3.png';
import ContactUs from "../../components/emailbox/EmailJS";
import ImageGallery from "../../components/imagegallery";
import SwiperGallery from '../../components/swipergallery';

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
theme.typography.h4 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.25rem',
  },
};

function About() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      width: '100%',
      background: '#ffdead',
      paddingTop: { xs: '6vh', sm: '6vh', md: "10vh" },
      marginTop: { xs: '6vh', sm: '6vh', md: "10vh" },
    }}>
      <TopBar id="top-nav"></TopBar>
      <Container maxWidth="false" sx={{
        width: '100%',
        height: 'auto',
        marginBottom: '100px',
      }}>
        <Typography variant='h1' gutterBottom component="div" sx={{
          color: 'black',
          fontFamily: `Sans-seriff`,
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: '150px'
        }}>
          Gallery
        </Typography>
        <Container maxWidth="md" justifyContent="center"sx={{
          display: { xs: 'none', sm: 'none', md: 'block'},
        }}>
          <ImageGallery/>
        </Container>
        <Container maxWidth="lg" justifyContent="center" sx={{
          display: { xs: 'block', sm: 'block', md: 'none'}
        }}>
          <SwiperGallery/>
        </Container>
      </Container>
      <Typography variant="h2" sx={{
        color: 'black', 
        textAlign:'center', 
        fontFamily: `Calibri`,
        marginTop:'80px', 
        marginBottom: '80px'  
        }}>Team Member</Typography>
        <Container maxWidth="xl"sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row'},
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Container sx={{
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={FP1} alt="Founder Arenga Sugar Indo" width={'200px'} height={'200px'}/>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              marginTop: '40px',
              color: 'black'
            }}>Alyssa Nahla Amir </Typography>
            <Typography variant="body1" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              fontWeight: '600'
            }}>Founder</Typography>
            <Container sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Link href="https://instagram.com/alyssanahla?igshid=YmMyMTA2M2Y= " target="blank" display={'inline'}>
                <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
              </Link> 
              <Link href="https://www.linkedin.com/in/alyssa-nahla-amir-931a54200" target="blank" display={'inline'}>
                <LinkedInIcon sx={{color: 'black'}}/>
              </Link> 
            </Container> 
          </Container>
          <Container sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={FP2} alt="Co-Founder Arenga Sugar Indo" width={'200px'} height={'200px'}/>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              marginTop: '40px',
              color: 'black'
            }}>Khairina Larasati </Typography>
            <Typography variant="body1" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              fontWeight: '600'
            }}>Co-Founder</Typography>
            <Container sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Link href="https://www.instagram.com/khairinalarasati/" target="blank" display={'inline'}>
                <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
              </Link> 
              <Link href="https://www.linkedin.com/in/khairina-larasati/" target="blank" display={'inline'}>
                <LinkedInIcon sx={{color: 'black'}}/>
              </Link> 
            </Container>
          </Container>
          <Container sx={{
            width: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img src={FP3} alt="General Manager Arenga Sugar Indo" width={'200px'} height={'200px'}/>
            <Typography variant="h6" sx={{
              fontFamily: `Calibri`,
              marginTop: '40px',
              color: 'black'
            }}>M Wali Jamhuri Siregar </Typography>
            <Typography variant="body1" sx={{
              fontFamily: `Calibri`,
              color: 'black',
              fontWeight: '600'
            }}>General Manager</Typography>
            <Container sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Link href="https://instagram.com/walijamhuri?igshid=YmMyMTA2M2Y=" target="blank" display={'inline'}>
                <InstagramIcon sx={{color: 'black', marginRight: '10px'}}/>
              </Link> 
              <Link href="https://www.linkedin.com/in/muhammad-wali-jamhuri-siregar-a6b21b14b" target="blank" display={'inline'}>
                <LinkedInIcon sx={{color: 'black'}}/>
              </Link> 
            </Container>
          </Container>
        </Container>
        <Divider sx={{
          marginTop: '100px',
          marginBottom: '50px'
        }}></Divider>
        
        <Typography variant="h4" sx={{textAlign: 'center', display: 'block', color: 'black', marginBottom: '50px'}}>
            get in touch with us
          </Typography>
        <Container maxWidth='md'  sx={{
          display: 'flex',
          color: 'black',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ContactUs/>
        </Container>
      <WaButton/>
      <ScrollArrow/>
      <BottomBar/> 
    </Box>
    </ThemeProvider>
  );
};

export default About;