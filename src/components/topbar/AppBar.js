import React, {useState} from "react";
import { AppBar, Toolbar, Button, useScrollTrigger, Slide, Stack } from'@mui/material';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import DrawerBar from "./DrawerBar";

function HideOnScroll(props) {
  const { children, window } = props;

  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
  };


function TopBar(props){
  const navigate = useNavigate();
  const [topbar, setTopbar] = useState(false);
  const changeBackground = () => {
    if(window.scrollY >= 50) {
      setTopbar(true);
    } else {
      setTopbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return(
    <HideOnScroll>
      <AppBar elevation={0} color="transparent" className={topbar ? 'topbar active': 'topbar'}>
        <Toolbar   sx={{
          justifyContent:'flex-end',
          alignItems:'center',
        }}>
          <Stack className="Topbar" direction="row" spacing={1} sx={{
            display: {xs: 'none', sm: 'none', md: 'block'},
          }}>
            <Button variant='text' size="large" onClick={() => navigate('/')} sx={{color:'#eee', fontSize:{xs: '0.9rem',sm:'0.9rem',md: '1rem'}, fontWeight: '600', fontFamily: `glacial indifference`, '&:hover':{ color:'lightBlue'}}}>Home</Button>
            <Button variant='text' size="large" onClick={() => navigate('/aboutarenga')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', fontFamily: `glacial indifference`, '&:hover':{ color:'lightBlue'}}}>About</Button>             
            <Button variant='text' size="large" onClick={() => navigate('/product')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', fontFamily: `glacial indifference`, '&:hover':{ color:'lightBlue'}}}>Product</Button>
            <Button variant='text' size="large" onClick={() => navigate('/distribution')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', fontFamily: `glacial indifference`, '&:hover':{ color:'lightBlue'}}}>Distribution</Button>
            <Button variant='text' size="large" onClick={() => navigate('/contact')} sx={{color:'#eee', fontSize:'1rem', fontWeight: '700', fontFamily: `glacial indifference`, '&:hover':{ color:'lightBlue'}}}>Contact</Button>
          </Stack>
          <DrawerBar/>
        </Toolbar>
        
      </AppBar>
    </HideOnScroll>
    );
};

export default TopBar;