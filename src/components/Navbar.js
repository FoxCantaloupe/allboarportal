import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Apps, ArrowBack, AssignmentInd, ContactMail, Home } from '@material-ui/icons'
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';
import React, {useState} from 'react';
import avatar from "../images/avatar.jpg";
import { Link } from 'react-router-dom';
import { SocialIcon} from 'react-social-icons';
import socialIcon from 'react-social-icons/build/social-icon';

const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250, 
        background: "#92DCE5",  /* fallback for old browsers */
        height: "100%",
        backdropFilter: "blur(5px)"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
}));
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        link: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        link: "/Resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Portfolio",
        link: "/Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        link: "/Contact"
    }
]



const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = ((slider,open) => () => {
        setState({...state, [slider]: open});
    });
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"
        onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="spaceman" />
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(

                    <Link to={lsItem.link} style={{textDecoration:"none"}}>
                    <ListItem button key={key}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <Typography variant="p" style={{color:"#2B303A", textShadow: "2px 2px #EEE5E9"}}>{lsItem.listText}</Typography>
                    {/* <ListItemText className={classes.listItem} primary={lsItem.listText} /> */}
                    
                </ListItem>
                </Link>
                
                    ))}
                <div className="inline-flex py-3 px-3 my-6" style={{justifyContent:"space-between"}}>
                <SocialIcon url="https://github.com/FoxCantaloupe" className="mr-4" target="_blank" fgColor="#fff" style={{height: "35px", width: "35px"}}/>
                <SocialIcon url="https://twitter.com/JoseLop35491374" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                <SocialIcon url="https://www.linkedin.com/in/jose-lopez-428a62143/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </List>
     
            


        </Box>

    )
    return (
        <>
        <Box component="nav">
            <AppBar position="fixed" style={{background: "#92DCE5"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                    {/* <ArrowBack style={{color: "#FFE0B5"}}/>  */}
                    <MenuIcon  style={{color: "#2B303A", textShadow: "2px 2px #EEE5E9"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color:"#2B303A"}}>
                        Portfolio
                    </Typography>
                    <MobileRightMenuSlider anchor="right" open={state.right}
                    onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        
                    </MobileRightMenuSlider>
                </Toolbar>
            </AppBar>  
        </Box>
        </>
    )
}

export default Navbar
