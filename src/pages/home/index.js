import React from "react";
import { Stack, Grid , Box, Container, Typography, Divider, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/topbar/AppBar";
import sample from '../../components/media/WEB.mp4';
import '../../App.css';
import WaButton from "../../components/wabutton/WaButton";
import SlideSweeper from "../../components/Swiper";
import ScrollArrow from "../../components/scrolltop/ScrollTop.js";

import Foto7 from '../../components/media/7.png';
import FP1 from '../../components/media/FP1.png';
import FP2 from '../../components/media/FP2.png';
import FP3 from '../../components/media/FP3.png';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



import Integrity from '../../components/media/integrity-icon.png';
import Quality from '../../components/media/quality-icon.png';
import Commitment from '../../components/media/commitment-icon.png';
import Innovation from '../../components/media/innovation-icon.png';
import BottomBar from "../../components/botomnav/BottomNav";
import Materi from "../../components/swiperproduk";

function Home() {
  const navigate = useNavigate();
  return (  
    <Box component="div" >
      <Box sx={{
        width: '100%',
        height: '500px',
        position: 'relative',
      }}>
        <TopBar></TopBar>
        <video id="background-video" autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
      
        
      </Box>
      <div component="Container">
        <Container maxWidth="false" sx={{
          width:'100%',
          height: '5200px',
          float: "bottom",
          position:'relative',
          color: 'blue',
          marginTop: '175px',
          paddingTop: "100px",
         /* backgroundColor: '#d2691e'*/
          backgroundImage:'linear-gradient(to bottom, #d2691e,#cd853f,#ffdead, #ffdead,#fff, #fff);'
        }}>
          
          <SlideSweeper></SlideSweeper>
          <Divider sx={{
            marginTop: '100px',
            marginBottom: '100px'
          }}></Divider>
          
          

          <Stack direction="row" spacing={2} sx={{
            marginBottom: '300px',
            paddingTop: '100px'
          }}>
          <Container sx={{
            width: '1500',
            height: '500',
          }}>
              <Typography variant="h4" sx={{ 
                color: 'black', 
                textAlign: 'center', 
                fontFamily:`Roboto`, 
                fontWeight: '800',
                marginBottom: '40px'
              }}>Vision</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black', 
                textAlign: 'justify', 
                fontFamily: `Calibri`, 
                fontWeight: '500'
              }}>
                Our goal is to become the sustainable company, to prosper and increase the 	value of 
                Indonesian farmers with their agricultural products by bringing our 	best local arenga 
                sugar to the international market.
              </Typography>
            </Container>
            <Container sx={{
              width: '1500',
              height: '800',
              position: 'relative'
            }}>
              <Typography variant="h4" sx={{ 
                color: 'black', 
                textAlign: 'center', 
                fontFamily:`Roboto`, 
                fontWeight: '600',
                marginBottom: '40px'
              }}>Mission</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black', 
                fontFamily :`Calibri`,
                display: 'list-item'
              }}> 
              Providing the best and tasteful yet healthy local arenga sugar to the buyers with the 
              best price point.</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black', 
                fontFamily :`Calibri`,
                display: 'list-item'
              }}> 
              Help to increase the price value for the local farmers for their prosperity by promoting 
              their product to international market.</Typography>
              <Typography variant="h6" sx={{ 
                color: 'black', 
                fontFamily :`Calibri`,
                display: 'list-item'
              }}> 
              Help to provide education for the local farmers to become more sustainable for the future.</Typography>
            </Container>            
            </Stack>
            
            <Divider sx={{
              marginTop: '100px',
              marginBottom: '100px',
            }}></Divider>
            
            <Typography variant="h2" sx={{ 
              color: 'black', 
              textAlign:'center', 
              fontFamily: `Roboto`,
              marginTop:'80px', 
              marginBottom: '80px'
            }}>Our Features</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6} style={{textAlign:'center'}}>
                <Container sx={{
                  width:'100%',
                  height: '300px'
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
              <Grid item xs={6} style={{textAlign:'center'}}>
              <Container sx={{
                  width:'100%',
                  height: '300px'
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
              <Grid item xs={6} style={{textAlign:'center'}}>
                <Container sx={{
                  width:'100%',
                  height: '300px'
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
              <Grid item xs={6} style={{textAlign:'center'}}>
                <Container sx={{
                  width:'100%',
                  height: '300px'
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
              marginTop: '20px',
              marginBottom: '20px',
            }}></Divider>

            <Typography variant="h2" sx={{
              color: 'black', 
              textAlign:'center', 
              fontFamily: `Roboto`,
              marginTop:'80px', 
              marginBottom: '80px'
            }}>Our Product</Typography>
            <Typography variant="h6" sx={{
                marginTop: '20px',
                marginBottom: '20px',
                color:'black',
                fontFamily: `Calibri`,
                textAlign: 'center'
              }}>
                Bounty from the homeland of Indonesian. Arenga Sugar Indo is focus on selling arenga 
                sugar /  zuiker palm sugar from local Indonesian farmers in several forms, which are 
                arenga sugar syrups, arenga sugar powders, and arenga sugar blocks, with or without 
                preservative. 
              </Typography>
            <Materi />

            <Divider sx={{
              marginTop: '80px',
              marginBottom: '20px',
            }}></Divider>

            <Typography variant="h2" sx={{ 
              color: 'black', 
              textAlign:'center', 
              fontFamily: `Roboto`,
              marginTop:'80px', 
              marginBottom: '80px' 
            }}>Our Distribution & Partner</Typography>
            <img src={Foto7} alt="" className={'center'} onClick={() => navigate('/distribution')}  />

            <Divider sx={{
              marginTop: '80px',
              marginBottom: '20px',
            }}></Divider>

            <Typography variant="h2" sx={{ 
              color: 'black', 
              textAlign:'center', 
              fontFamily: `Roboto`,
              marginTop:'80px', 
              marginBottom: '80px'  
            }}>Team Member</Typography>
            <Container maxWidth="xl"sx={{
              display: 'flex',
              flexDirection: 'row',
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
                    <InstagramIcon sx={{color: 'black'}}/>
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
                    <InstagramIcon sx={{color: 'black'}}/>
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
                    <InstagramIcon sx={{color: 'black'}}/>
                  </Link> 
                  <Link href="https://www.linkedin.com/in/muhammad-wali-jamhuri-siregar-a6b21b14b" target="blank" display={'inline'}>
                    <LinkedInIcon sx={{color: 'black'}}/>
                  </Link> 
                </Container>
              </Container>
            </Container>
            
          </Container>
      </div>
      <WaButton/> 
      <ScrollArrow/>   

      <BottomBar/>
    </Box>
    ); 
};

export default Home;
