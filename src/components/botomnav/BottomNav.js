import React from "react";
import { Container, Stack, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function BottomBar(){
    return (        
        <div className="bottomBar">
            <Stack direction={'row'} spacing={2} sx={{
                padding: '20px 20px 20px 20px',
                marginLeft: '20px'
            }}>
                <Container sx={{
                    width: '50px'
                }}></Container>
                <Container sx={{
                width: '450px',
                display : 'flex',
                flexDirection: 'column',
                }}>
                    <Typography variant="h6" >Address</Typography>
                    <Typography variant="body2" sx={{
                        marginTop: '20px'
                    }}>Jl. Raya Cijujung Blok.C-16 Sukaraja, Kab. Bogor, Jawa Barat, Indonesia (16710)</Typography>
                    <Typography variant="body2" sx={{marginTop: '50px'}}>© 2022 Arenga Sugar Indo. All rights reserved</Typography>
            </Container>
            <Container sx={{
                width: '600px',
                display : 'flex',
                flexDirection: 'column',
                }}>
                    <Typography variant="h6" sx={{marginLeft: '120px'}}>Contacts</Typography>
                    <Typography variant="body2"sx={{
                        marginTop: '20px',
                        marginLeft: '120px'
                    }}>arengasugarindo@gmail.com </Typography>
                    <Typography variant="body2" sx={{marginLeft: '120px'}}>marketing@arengasugarindo.com</Typography>
                    <Typography variant="body2" sx={{marginLeft: '120px'}}>Whatsapp : +62 812 8826 084</Typography>
            </Container>
            <Container sx={{
                width: '400px',
                paddingLeft: '20px',
                }}>
                    <Typography variant="h6" sx={{
                        marginBottom: '20px'
                    }}>Social Media</Typography>
                    
                    <Link href="https://instagram.com/arengasugarindo?igshid=YmMyMTA2M2Y=" target="blank">
                        <InstagramIcon sx={{color: 'white'}}/>
                    </Link> 
                    <Link href="https://www.linkedin.com/company/indo-export-group/" target="blank">
                        <LinkedInIcon/>
                    </Link>
                                        
            </Container>
            
           </Stack>
        </div>
    );
};
export default BottomBar;