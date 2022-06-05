import React from "react";
import {Fab} from '@mui/material';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';

function WaButton(){
    return(
        <Fab
        aria-label="whatsapp" size="large" sx={{
            position: 'fixed',
            backgroundColor:"#25D366",
            color:"white",
            width:"30",
            height:"30",
            bottom: (theme) => theme.spacing(2),
            right: (theme) => theme.spacing(2),
            '&:hover':{color:"black"}
        }}
        href="https://api.whatsapp.com/send?phone=6281288262036&text=Hello World!!!"
        target="blank" >
            <WhatsappTwoToneIcon fontSize="large"/>   
        </Fab>
    );
};
export default WaButton;