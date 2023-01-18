import React from "react";import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme
  } from "@mui/material/styles";
import { SwipeableDrawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const theme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            color: 'white',
            background: "chocolate",
          },
        }
      }
    }
  });
const DrawerBar = (props)=> {
    const { window } = props;
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };
      const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
        <div>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'none' } }}>
                <MenuIcon />
            </IconButton>
        <SwipeableDrawer 
        container={container}
        open ={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
            <Box onClick={handleDrawerToggle} sx={{textAlign: 'center', width: drawerWidth}}> 
                <List onClick={() => navigate('/')}>
                    <ListItemButton >
                        <ListItemIcon>
                            <ListItemText inset sx={{color:'white'}}>
                                <b>HOME</b>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <List onClick={() => navigate('/aboutarenga')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText inset sx={{color:'white'}}>
                                <b>ABOUT</b>
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <List onClick={() => navigate('/product')}>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText inset sx={{color:'white'}}>
                            <b>PRODUCT</b>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <List onClick={() => navigate('/distribution')}>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText inset sx={{color:'white'}}>
                            <b>DISTRIBUTION</b>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            <List onClick={() => navigate('/contact')}>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText inset sx={{color:'white'}}>
                            <b>CONTACT</b>
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
            </Box>    
        </SwipeableDrawer>
        </div>
        </ThemeProvider>
        </StyledEngineProvider>
    );
};
export default DrawerBar;