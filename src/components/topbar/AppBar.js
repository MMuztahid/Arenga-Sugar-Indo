import React from "react";
import { AppBar, Toolbar, Button, useScrollTrigger, Slide, Stack } from'@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
  };

function TopBar(){
    const navigate = useNavigate();
    return(
      <HideOnScroll>
        <AppBar position="fixed" elevation={0} color="transparent" classes="top-nav"sx={{
          width: '100%',
          height:'10vh',
          justifyContent: 'center',
          elevation:'none'
        }}>
            <Toolbar   sx={{
              justifyContent:'flex-end',
              alignItems:'center',
              padding:'20px 0px',
            }}>
              <Stack direction="row" spacing={1}>
              <Button variant='text' size="large" onClick={() => navigate('/')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', '&:hover':{ color:'lightBlue'}}}>Home</Button>
              <Button variant='text' size="large" onClick={() => navigate('/contact')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', '&:hover':{ color:'lightBlue'}}}>Contacts</Button>
              <Button variant='text' size="large" onClick={() => navigate('/aboutarenga')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', '&:hover':{ color:'lightBlue'}}}>About</Button>             
              <Button variant='text' size="large" onClick={() => navigate('/distribution')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', '&:hover':{ color:'lightBlue'}}}>Distribution</Button>
              <Button variant='text' size="large" onClick={() => navigate('/product')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', '&:hover':{ color:'lightBlue'}}}>Product</Button>
              </Stack>
            </Toolbar>
        </AppBar>
        </HideOnScroll>
    );
};

export default TopBar;