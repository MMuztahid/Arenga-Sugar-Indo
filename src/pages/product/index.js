import React from "react";
import {Box, Typography, Container, Stack, Divider} from "@mui/material";
import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import Foto1 from '../../components/media/1-nbg.png';
import Foto2 from '../../components/media/2-nbg.png';
import Foto3 from '../../components/media/3-nbg.png'
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";

function Product() {
    return (
        <Box 
            sx={{
            width: '100%',
            height: '100%',
            paddingTop: '90px',
            backgroundColor:"#ffdead"
            }}
            >
              <TopBar id="top-nav"></TopBar>
              <Container sx={{
              width: "100%",
              height: "2000px",
            }}>
              <Typography variant='h2' gutterBottom component="div" sx={{
                color:'black', 
                fontFamily: `Roboto`,
                textAlign: 'center', 
                fontWeight: '600'
              }}>
                Our Product
              </Typography>
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
              <Divider sx={{
                marginTop: '80px',
                marginBottom: '80px'
              }}></Divider>
              <Stack direction="row" spacing={2}>
                <Container sx={{
                  width: '1500px',
                  height: '500px',
                  marginTop:"50px",
                }}>
                  <img src={Foto1} alt="Arenga Sugar Syrup" width="400" height='400' style={{left:'0'}} />
                  

                </Container>
                <Container sx={{
                  paddingTop: '50px',
                  width: '1500px',
                  height: '500px'
                }}>
                  <Typography variant="h4" sx={{
                    color:'#998567',
                    fontFamily: `Roboto`,
                    marginBottom: '20px',
                    marginTop: '-20px',
                    fontWeight: '600',
                  }}>
                  Arenga Sugar Syrups 
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    100 %  Palm Sugar
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Brix 75 – 80
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Dark Color and Sweet Thick
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Taste like Caramel
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Packaging 1kgs, 5kgs, 25kgs and 30kgs Jerrycans
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    No chemicals or animal by-products are added in making or decolourizing the sugars
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability with preservative is 6 months
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability without preservative is 2 months
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Any specification order by request 
                  </Typography>
                </Container>
              </Stack>
              <Divider sx={{
                marginTop: '20px',
                marginBottom: '20px'
              }}></Divider>
              <Stack direction="row" spacing={2}>
                <Container sx={{
                  paddingTop: '50px',
                  width: '2000px',
                  height: '500px'
                }}>
                  <Typography variant="h4" sx={{
                    color:'#998567',
                    fontFamily: `Roboto`,
                    marginBottom: '20px',
                    marginTop: '-20px',
                    fontWeight: '600',
                  }}>
                  Arenga Sugar Powders 
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    100 %  Palm Sugar or with mix refined sugar, for preservative
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Dry  1 – 2 %
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Mesh 16 – 18 %
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability for 1 year
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Packaging with plastic Inner 10 Micron + Sealer or gunny sack
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    No chemicals or animal by-products are added in making or decolorizing the sugars
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Any specification order by request 
                  </Typography>
                </Container>
                <Container sx={{
                  width: '1500px',
                  height: '500px',
                  marginTop: '50px',
                  justifyContent: 'left',
                  left: '0'
                }}> 
                  <img src={Foto2} alt="" width="400" height="400" />
                </Container>
              </Stack>
              <Divider sx={{
                marginTop: '20px',
                marginBottom: '20px'
              }}></Divider>
              <Stack direction="row" spacing={2}>
                <Container sx={{
                  width: '1500px',
                  height: '500px',
                  marginTop:"50px",
                }}>
                  <img src={Foto3} alt="Arenga Sugar Blocks" width="400" height='400' style={{left:'0'}} />
                  

                </Container>
                <Container sx={{
                  paddingTop: '50px',
                  width: '1500px',
                  height: '500px'
                }}>
                  <Typography variant="h4" sx={{
                    color:'#998567',
                    fontFamily:`Roboto`,
                    marginBottom: '20px',
                    marginTop: '-20px',
                    fontWeight: '600',
                  }}>
                  Arenga Sugar Blocks 
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    100 %  Palm Sugar
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Brix 75 – 80
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Dark Color and Sweet Thick
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Taste like Caramel
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Packaging 1kgs, 5kgs, 25kgs and 30kgs Jerrycans
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    No chemicals or animal by-products are added in making or decolourizing the sugars
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability with preservative is 6 months
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability without preservative is 2 months
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Any specification order by request 
                  </Typography>
                </Container>
              </Stack>

            </Container>
            

            
            <WaButton/>
            <ScrollArrow/>
            <BottomBar/>
            </Box>
    
        );

};

export default Product;