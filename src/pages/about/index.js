import React from "react";
import {Box, Container, Divider, Stack, Typography} from "@mui/material";
import TopBar from "../../components/topbar/AppBar";
import WaButton from "../../components/wabutton/WaButton";
import ScrollArrow from "../../components/scrolltop/ScrollTop";
import Foto3 from "../../components/media/3.jpg";
import DataTable from "../../components/datatabel/DataTable";
import Materi from "../../components/swipermateri";
import BottomBar from "../../components/botomnav/BottomNav";
import MateriBenefits from "../../components/swipermateri1";

function Company() {
    return (
        <Box 
            sx={{
            width: '100%',
            height: '100%',
            paddingTop: '90px',
            backgroundColor:"#ffdead",
            }}
            >
            <TopBar></TopBar>
            <Container sx={{
              width: "100%",
              height: "4000px",
            }}>
            <Typography variant='h2' gutterBottom component="div" sx={{
              textAlign: "center",
              marginBottom: "60px",
              fontFamily: `Roboto`,
              fontWeight: '600',
              color: 'black'
            }}>
              About Arenga
            </Typography>
            <Stack direction="row" spacing={3}>
              <Container sx={{
                width:'450px',
                heigth: '400px'
              }}>
                <img src={Foto3} alt="" width="400" height="400" position="relative" />
              </Container>
              <Container sx={{
                width: "600px",
                height : "400px",
                paddingTop : "100px",
              }}>
                <Typography variant="h6"sx={{
                  textAlign:'center',
                  color: "black",
                  fontFamily: `Calibri`
                }}>
                  Arenga sugar is a sweetener made from nira which is derived from the male flower 
                  bunches of the palm tree / zucker palme / aren palm / zuiker palm / sugar palm /
                  gomuti palm. Nira, the basic ingredients of the arenga sugar is a sweet liquid 
                  that comes from the process of tapping the plant stems.
                </Typography>
              </Container>
            </Stack>
            <Divider sx={{
              marginTop:"80px",
              marginBottom:'100px'
            }}></Divider>
            <Typography variant="h5"textAlign="center" sx={{
              color: "black",
              fontFamily: `Roboto`,
              fontWeight: '400'
            }}>ARENGA SUGAR IS DIFFERENT FROM COCONUT PALM SUGAR AND BROWN SUGAR</Typography>
            <Materi />
            <Divider sx={{
                marginTop:"20px",
                marginBottom:'80px'
              }}></Divider>
              <Typography variant="h6" sx={{
                color: "black",
                fontFamily: `Roboto`,
                marginBottom: '40px'
              }}>
                per 100g serving contains :
              </Typography>
              <Container  sx={{
                height: '400px'
              }}>
                <DataTable/>
              </Container>
              <Divider sx={{
                marginTop:"20px",
                marginBottom:'80px'
              }}></Divider>
              <Typography variant="h4" sx={{
                marginBottom: '80px', 
                textAlign: 'center', 
                color: "black",
                fontFamily:`Roboto`,
              }}>QnA</Typography>
              <Typography variant="h6" sx={{
                marginBottom: '20px', 
                color: "black",
                fontFamily: `Roboto`,

                }}>
                  How to make arenga sugar?
              </Typography>
              <Typography variant="h6" sx={{
                marginBottomm:'20px', 
                color: "black",
                fontFamily: `Calibri`
              }}>
                Arenga sugar is made from nira which is derived from the male flower bunches of the palm 
                tree. There are two steps in the manufacture of arenga sugar, which are:
              </Typography>
              <Typography variant="h6"sx={{
                marginBottomm:'20px', 
                marginLeft: '40px', 
                color: "black",
                fontFamily: `Calibri`,
                display: 'list-item'
              }}>
                First, the farmer collects the pieces and the nira liquid on the male flower bunches of 
                the palm tree in a container.
              </Typography>
              <Typography variant="h6"sx={{
                marginBottomm:'20px', 
                marginLeft: '40px', 
                color: "black",
                fontFamily: `Calibri`,
                display: 'list-item'
              }}>
                And then nira is placed on a heater until most of the water evaporated. The final product 
                is a liquid dark brown coloured and ready to be melded.
              </Typography>
              <Typography variant="h6"sx={{
                marginBottomm:'20px', 
                marginTop: '40px', 
                color: "black",
                fontFamily: `Roboto`
              }}>
                What is the nutritional content of arenga sugar?
              </Typography>
              <Typography variant="h6" sx={{
                marginTop: '20px',
                color: "black",
                fontFamily: `Calibri`
              }}>
                US Department of Agriculture reported, arenga sugar contains 337kcal in 100 grams of 
                serving. In addition, 100 grams of arenga sugar also contains 84.21 grams of carbohydrate, 
                211mg of salt, and 84.21 grams of sugar. Like any other sugar, arenga sugar also contains 
                a lot of calories. Therefore, you still need to have limits for the consumption, so the 
                arenga sugar can still be beneficial for you. In fact, arenga sugar has lower glycaemic 
                index than any other sugar. According to the data presented by American Diabetes 
                Association, the glycaemic index values are:
              </Typography>
              <Typography variant="h6"sx={{
                marginBottomm:'20px', 
                marginLeft: '40px', 
                color: "black",
                display: 'list-item',
                fontFamily: `Calibri`
              }}>
                Low if it is equal to or lower than 55
              </Typography>
              <Typography variant="h6"sx={{
                marginBottomm:'20px', 
                marginLeft: '40px', 
                color: "black",
                display: 'list-item',
                fontFamily: `Calibri`
              }}>
                Medium if it is between 56 – 69
              </Typography>
              <Typography variant="h6" sx={{
                marginBottomm:'20px', 
                marginLeft: '40px', 
                color: "black",
                display: 'list-item',
                fontFamily: `Calibri`
              }}>
                High if it is equal to or greater than 70
              </Typography>
              <Typography variant="h6" sx={{
                marginTop: '20px',
                color: "black",
                fontFamily: `Calibri`
              }}>
                Glucose has glycaemic index value of 100. In comparison, food with glycaemic index value 
                of 50 can increase blood sugar levels by half of pure glucose. Granulated sugar has a 
                glycaemic index value of around 68, while based on the Contemporary Nutrition Functional 
                Approach book quoted by Live Strong, arenga sugar has a Glycaemic Index of 35 and 
                contains many important minerals. That is why arenga sugar is better than other types of 
                sweeteners. However, it is important to remember that glycaemic index can vary on 
                everyone and may also differ in the types of sugar from other palm trees.
              </Typography>
              <Typography variant="h6" sx={{
                marginTop: '20px',
                marginBottom: '20px',
                color: "black",
                fontFamily: `Roboto`
                
              }}>
                is Benefit of Arenga Sugar as Sweet as it taste?                
              </Typography>
              <Typography variant="h6" sx={{
                marginTop: '20px',
                color: "black",
                fontFamily: `Calibri`
              }}>
                Compared to other sweeteners, arenga sugar has a relatively low impact on blood glucose. 
                Therefore, arenga sugar is suitable for consumptions by diabetics, who do not produce 
                enough insulin or insulin resistant. For comparison, granulated sugar usually has a 
                glycaemic index of 68 and honey is at 55. Compared to coconut palm sugar and granulated 
                sugar, arenga sugar is higher in potassium, magnesium, zinc, iron, phosphorus, nitrogen, 
                and sodium. However, just because arenga sugar has a lower impact on the blood sugar 
                levels, does not mean that it can be consumed as much as possible. Consuming excessive 
                amounts will also increase the blood sugar in much higher levels.
              </Typography>
              <Divider sx={{
                marginTop:"80px",
                marginBottom:'80px'
              }}></Divider>
              <Typography variant="h4" sx={{
                color:'black', 
                marginBottom:'20px',
                fontFamily: `Roboto`,
                textAlign: 'center'
              }}>
                Benefits of Arenga Sugar
              </Typography>
              <Typography variant="h6" sx={{
                color:'black', 
                marginTop:'20px', 
                marginBottom: '20px'
              }}>
                Because it is more nutritious than regular granulated sugar, arenga sugar is believed to 
                be beneficial for our health, which are:
              </Typography>
              <MateriBenefits/>
            </Container>
            
            <WaButton/>    
            <ScrollArrow/>
            <BottomBar/>
            </Box>
    
        );

};

export default Company;