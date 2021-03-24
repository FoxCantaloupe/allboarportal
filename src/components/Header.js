import { Avatar, Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import ReactTyped from 'react-typed'
import avatar from "../images/avatar.jpg"

// CSS STYLES
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#2B303A",
        textShadow: "2px 2px #EEE5E9",
        textDecoration: "underline"
    },
    subtitle: {
        color: "#2B303A",
        
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
        
    },
    paper: {
        width: "60%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        background: "#92DCE5",
        borderRadius: "25px"

    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar}  src={avatar} alt="Jose Lopez" />
            </Grid>
            <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.title} variant="h4">
                <ReactTyped strings={["Jose Lopez"]} typeSpeed={40}/>
            </Typography>
            <Typography className={classes.subtitle}  variant="h5">
                <ReactTyped strings={["Web Design", "Web Development", "React Developer"]} typeSpeed={40}
                backSpeed={60}
                loop/>
            </Typography>
            </Paper>
        </Box>
    );
};

export default Header
