import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Stack } from '@mui/material';
import './EmailJS.css';


function ContactUs() {
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_3pg6o6t', 'template_a5ra5ka', form.current, 'DtjdsNv23solqurdq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset(); 
    };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <Stack direction={{xs: "column", sm: "column" ,md: "row"}} spacing={2}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
            </Container>
        </Container>
        <Container sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <label>Message</label>
            <textarea name="message" style={{ height:"95px" }}/>
        </Container>
        </Stack>
        <input type="submit" value="Send" />
        
    </form>
  );
};
export default ContactUs;