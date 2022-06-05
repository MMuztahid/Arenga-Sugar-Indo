import React, {useState} from 'react';
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../../App.css';


const ScrollArrow = () =>{
    const [showScroll, setShowScroll] = useState(false)
    
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
        }
    };
        
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    window.addEventListener('scroll', checkScrollTop)
    
    return (
        <Fab className="scrollTop" onClick={scrollTop} color="primary" 
        style={{display: showScroll ? 'flex' : 'none'}}
        sx={{position:"fixed", bottom: "16", left: "50%"}}>
            <KeyboardArrowUpIcon/>
        </Fab>            
  );
}

export default ScrollArrow;