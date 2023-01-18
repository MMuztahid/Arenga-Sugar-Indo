import React from "react";
import { Box, Typography, Container, Stack, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import WaButton from "../../components/wabutton/WaButton";
import Foto1 from '../../components/media/1-nbg.png';
import Foto2 from '../../components/media/2-nbg.png';
import Foto3 from '../../components/media/3-nbg.png'
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import BottomBar from "../../components/botomnav/BottomNav";

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
theme.typography.h4 = {
  fontSize: '1.125rem',
  '@media (min-width:600px)': {
    fontSize: '1.125rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.25rem',
  },
};
theme.typography.h6 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
};

function Product() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      width: '100%',
      paddingTop: { xs: '6vh', sm: '6vh', md: "10vh" },
      marginTop: { xs: '6vh', sm: '6vh', md: "10vh" },
      backgroundColor:"#ffdead",
      height: "fit-content",
    }}>
      <div style={{
        width: "100%",
        height: "fit-content",
        justifycontent: 'center',
        marginBottom: '100px'
      }}>
        <Container>
          <Typography variant='h1' gutterBottom component="div" sx={{
            color:'black', 
            fontFamily: `Sans-seriff`,
            textAlign: 'center', 
            fontWeight: '600'
          }}>
            Our Product
          </Typography>
          <Container maxWidth='lg'>
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
          </Container>
          <Divider sx={{
            marginTop: { xs: '40px', sm: '40px', md: "80px" },
            marginBottom: { xs: '40px', sm: '40px', md: "80px" }, 
          }}></Divider>
          <Stack direction={{xs: 'column', sm:"column", lg:"row"}} spacing={{ xs: 1,sm: 1, lg:16 }}>
            <Container maxWidth="md" sx={{
              height: '500px',
              marginTop:"50px",
              justifyContent: 'center',
            }}>
              <img src={Foto1} alt="Arenga Sugar Syrup" width="400" height='400' style={{left:'0'}} />
            </Container>
            <Container maxWidth="md" sx={{
              paddingTop: { xs: '0px', sm: '0px', md: "50px" },
              height: { xs: 'fit-content', sm: 'fit-content',md: '500px'}
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
                    Durability with preservative up to 18 months
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Durability without preservative up to 12 months
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
                marginTop: { xs: '40px', sm: '40px', md: "20px" },
                marginBottom: { xs: '10px', sm: '10px', md: "20px" },
              }}></Divider>
              <Stack direction={{xs: 'column', sm:"column", lg:"row"}} spacing={{ xs: 1,sm: 1, lg:16 }}>
                <Container maxWidth="md" sx={{
                  paddingTop: '50px',
                  height: { xs: 'fit-content', sm: 'fit-content', md: "500px" }
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
                    100 %  Palm Sugar 
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
                    Durability  up to 12 months
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
                <Container maxWidth="md" sx={{
                  height: { xs: 'fit-content', sm: 'fit-content', md: "500px" },
                  marginTop: { xs: '0px', sm: '0px', md: "50px" },
                  justifyContent: 'left',
                  left: '0'
                }}> 
                  <img src={Foto2} alt="" width="400" height="400" />
                </Container>
              </Stack>
              <Divider sx={{
                marginTop: { xs: '10px', sm: '10px', md: "20px" },
                marginBottom: { xs: '10px', sm: '10px', md: "20px" },
              }}></Divider>
              <Stack direction={{xs: 'column', sm:"column", lg:"row"}} spacing={{ xs: 1,sm: 1, lg:16 }}>
                <Container maxWidth="md" sx={{
                  height: '500px',
                  marginTop:"50px",
                }}>
                  <img src={Foto3} alt="Arenga Sugar Blocks" width="400" height='400' style={{left:'0'}} />
                  

                </Container>
                <Container maxWidth="md" sx={{
                  paddingTop: '50px',
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
                    100% pure sugar
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Ø 5 - 8 centimetre 
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                    Wrapped with palm leaf 
                  </Typography>
                  <Typography variant="h6" sx={{
                    marginLeft: '30px',
                    fontFamily:`Calibri`,
                    color: 'black',
                    display: 'list-item'
                  }}>
                     Packaging with gunny sack
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
                    Durability up to 4 months
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
            <BottomBar/>
            </div>
            <WaButton/>
            <ScrollArrow/>
            </Box>
            </ThemeProvider>
        );

};

export default Product;