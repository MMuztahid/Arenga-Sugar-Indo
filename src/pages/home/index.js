import React from "react";
import { Stack, Grid , Box, Container, Typography, Divider, Link } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topbar/AppBar";
import sample from '../../components/media/WEB1.mp4';
import '../../App.css';
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop.js";

import Foto7 from '../../components/media/7.png';
import FP1 from '../../components/media/FP1.png';
import FP2 from '../../components/media/FP2.png';
import FP3 from '../../components/media/FP3.png';
import FotoProduk from '../../components/media/Bahan3.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Integrity from '../../components/media/integrity-icon.png';
import Quality from '../../components/media/quality-icon.png';
import Commitment from '../../components/media/commitment-icon.png';
import Innovation from '../../components/media/innovation-icon.png';
import BottomBar from "../../components/botomnav/BottomNav";
import SlideSweeper from "../../components/Swiper";

const theme = createTheme();
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
  fontSize: '1.125rem',
  '@media (min-width:600px)': {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.125rem',
  },
};
theme.typography.h6 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
};

function Home() {
  const navigate = useNavigate();
  return (  
    <ThemeProvider theme={theme}>
      <Box component="div">
        <TopBar></TopBar>   
        <div justify="center" style={{
          width:'100%',
          height: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          float: "bottom",
          position:'relative',
          color: 'white',
          backgroundImage:'linear-gradient(to bottom, #d2691e,#cd853f,#ffdead, #ffdead,#fff, #fff)',
        }}>
          <div
            dangerouslySetInnerHTML={{ __html: 
              `<video id="app__backgroundVideo" autoplay loop muted playsinline>
              <source src=${sample} type="video/mp4" />
              Your browser does not support the video tag.</video>
              `,}}
          />
            <SlideSweeper></SlideSweeper>
            <Divider sx={{
              marginTop: { xs: '40px', sm: '40px',md: '100px'},
              marginBottom: { xs: '40px', sm: '40px',md: '100px'},
            }}></Divider>
            <Stack direction={{xs: 'column', sm:"column", lg:"row"}} spacing={2} sx={{
              marginBottom: {xs: '40px',sm:'40px', md:'100px'},
              paddingTop: { xs: '20px', sm: '20px',md: '100px'},
            }}>
              <Container sx={{
                width: '100%',
                height: 'fit-content',
              }}>
                <Typography variant="h4" sx={{ 
                  color: 'black', 
                  textAlign: 'center', 
                  fontFamily:`Roboto`, 
                  fontWeight: '600',
                  marginBottom: { xs: '20px', sm: '20px',md: '40px'},
                }}>Vision</Typography>
                <Typography variant="h6" sx={{ 
                  color: 'black', 
                  textAlign: 'justify', 
                  fontFamily: `Calibri`, 
                  fontWeight: '600',
                }}>
                  Our goal is to become the sustainable company, to prosper and increase the 	value of 
                  Indonesian farmers with their agricultural products by bringing our 	best local arenga 
                  sugar to the international market.
                </Typography>
              </Container>
              <Container sx={{
                width: '1500',
                height: { xs: 'fit-content', sm: 'fit-content',md: '800'},
                position: 'relative',
                paddingLeft: { xs: '30px', sm: '30px',md: '0px'},
              }}>
                <Typography variant="h4" sx={{ 
                  color: 'black', 
                  textAlign: 'center', 
                  fontFamily:`Roboto`, 
                  fontWeight: '600',
                  marginBottom: { xs: '20px', sm: '20px',md: '40px'},
                }}>Mission</Typography>
                <Typography variant="h6" sx={{ 
                  color: 'black', 
                  fontFamily :`Calibri`,
                  display: 'list-item'
                }}> 
                  Providing the best and tasteful yet healthy local arenga sugar to the buyers with the 
                  best price point.
                </Typography>
                <Typography variant="h6" sx={{ 
                  color: 'black', 
                  fontFamily :`Calibri`,
                  display: 'list-item'
                }}> 
                  Help to increase the price value for the local farmers for their prosperity by promoting 
                  their product to international market.
                </Typography>
                <Typography variant="h6" sx={{ 
                  color: 'black', 
                  fontFamily :`Calibri`,
                  display: 'list-item'
                }}> 
                  Help to provide education for the local farmers to become more sustainable for the future.
                </Typography>
              </Container>            
            </Stack>
            <Divider sx={{
              marginTop: { xs: '40px', sm: '40px',md: '100px'},
              marginBottom: { xs: '40px', sm: '40px',md: '100px'},
            }}></Divider>
        <Typography variant="h2" sx={{ 
          color: 'black', 
          textAlign:'center', 
          fontFamily: `Roboto`,
          marginTop: { xs: '20px', sm: '20px',md: '80px'}, 
          marginBottom: { xs: '20px', sm: '20px',md: '80px'},
        }}>Our Features</Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} style={{textAlign:'center'}}>
            <Container sx={{
              width:'100%',
              height: { xs: 'fit-content', sm: 'fit-content',md: '300px'},
            }}>
              <img src={Integrity} alt="integrity-icon" width={'50px'} height={'50px'} />
              <Typography variant="h4" sx={{ 
                color: 'black',
                fontFamily: `Roboto`,
                fontWeight: '600',
                marginBottom: '20px'
              }}>Integrity</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black',
                fontFamily:`Calibri`
              }}>
                Committed to always cherished our quality for integrity, by treating other with honesty, 
                fairness, and respect, and will not take this compromised.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{textAlign:'center'}}>
            <Container sx={{
              width:'100%',
              height: { xs: 'fit-content', sm: 'fit-content',md: '300px'},
            }}>
              <img src={Quality} alt="integrity-icon" width={'50px'} height={'50px'} />
              <Typography variant="h4" sx={{ 
                color: 'black',
                fontFamily: `Roboto`,
                fontWeight: '600',
                marginBottom: '20px'
              }}>Quality</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black',
                fontFamily:`Calibri`
              }}>
                Maintaining quality is our responsibility and it exhibited by supplying products that delight 
                customers, establishing a healthy work environment, and delivering financial results that as 
                expected by investors. 
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{textAlign:'center'}}>
            <Container sx={{
              width:'100%',
              height: { xs: 'fit-content', sm: 'fit-content',md: '300px'},
            }}>
              <img src={Commitment} alt="integrity-icon" width={'50px'} height={'50px'} />
              <Typography variant="h4" sx={{ 
                color: 'black',
                fontFamily: `Roboto`,
                fontWeight: '600',
                marginBottom: '20px'
              }}>Commitment </Typography>
              <Typography variant="h6" sx={{ 
                color: 'black',
                fontFamily:`Calibri`
              }}>
                The importance to continue to provide the best for our customers and investors. And to not take 
                our connections and privileges to be taken for granted.
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{textAlign:'center'}}>
            <Container sx={{
              width:'100%',
              height: { xs: 'fit-content', sm: 'fit-content',md: '300px'},
            }}>
              <img src={Innovation} alt="integrity-icon" width={'50px'} height={'50px'}  />
              <Typography variant="h4" sx={{ 
                color: 'black',
                fontFamily: `Roboto`,
                fontWeight: '600',
                marginBottom: '20px'
              }}>Innovation</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black',
                fontFamily:`Calibri`
              }}>
                Inventing, designing, and developing our products and services to discover and open up new 
                opportunities and strengthen customer preference for Arenga Sugar Indo project.
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Divider sx={{
          marginTop: { xs: '40px', sm: '40px',md: '20px'},
          marginBottom: { xs: '10px', sm: '10px',md: '20px'},
        }}></Divider>
        <Typography variant="h2" sx={{
          color: 'black', 
          textAlign:'center', 
          fontFamily: `Roboto`,
          marginTop: { xs: '20px', sm: '20px',md: '80px'}, 
          marginBottom: { xs: '20px', sm: '20px',md: '80px'},
        }}>Our Product</Typography>
        <Typography variant="h6" sx={{
          marginTop: '20px',
          marginBottom: '20px',
          color:'black',
          fontFamily: `Calibri`,
          textAlign: 'center',
          paddingLeft: { xs: '20px', sm: '20px',md: '100px'},
          paddingRight: { xs: '20px', sm: '20px',md: '100px'},  
        }}>
          Bounty from the homeland of Indonesian. Arenga Sugar Indo is focus on selling arenga 
          sugar /  zuiker palm sugar from local Indonesian farmers in several forms, which are 
          arenga sugar syrups, arenga sugar powders, and arenga sugar blocks, with or without 
          preservative. 
        </Typography>
        <img src={FotoProduk} alt="" onClick={() => navigate('/product')} style={{
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: { xs: '24px', sm: '24px',md: '48px'},
          display: 'block',
        }} />
        <Divider sx={{
          marginTop: { xs: '40px', sm: '40px',md: '80px'},
          marginBottom: { xs: '10px', sm: '10px',md: '20px'},
        }}></Divider>
        <Typography variant="h2" sx={{ 
          color: 'black', 
          textAlign:'center', 
          fontFamily: `Roboto`,
          marginTop:{ xs: '20px', sm: '20px',md: '80px'}, 
          marginBottom: { xs: '20px', sm: '20px',md: '80px'}, 
        }}>Our Distribution & Partner</Typography>
          <img src={Foto7} alt="" className={'center'} onClick={() => navigate('/distribution')}  />
        <Divider sx={{
          marginTop: { xs: '40px', sm: '40px',md: '80px'},
          marginBottom: { xs: '10px', sm: '10px',md: '20px'},
        }}></Divider>
        <div style={{
          background: { xs: 'noe', sm: 'none',md: 'white'},
        }}>
          <Typography variant="h2" sx={{ 
            color: 'black', 
            textAlign:'center', 
            fontFamily: `Calibri`,
            marginTop: { xs: '40px', sm: '40px',md: '80px'},
            marginBottom: { xs: '40px', sm: '40px',md: '80px'},  
          }}>Team Member</Typography>
          <Container justify="space-evenly" maxWidth="xl"sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row'},
            alignItems: 'center'
          }}>
            <Container justify="center"sx={{
              width: '250px',
              display: 'flex',
              flexDirection: 'column',
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
                  <LinkedInIcon sx={{color: 'black', marginRight: '10px'}}/>
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
                  <LinkedInIcon sx={{color: 'black', marginRight: '10px'}}/>
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
                  <LinkedInIcon sx={{color: 'black', marginRight: '10px'}}/>
                </Link> 
              </Container>
            </Container>
          </Container>
        </div>
        <BottomBar />
      </div>           
      <WaButton/> 
      <ScrollArrow/>
    </Box>
    </ThemeProvider>
    ); 
};

export default Home;
