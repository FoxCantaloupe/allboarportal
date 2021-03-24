import { Card, FormControlLabel, makeStyles, Paper, Slide, Switch, Typography } from '@material-ui/core'
import { MobileFriendly } from '@material-ui/icons';
import React, { useEffect } from 'react'
import ReactTyped from 'react-typed';


const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  wrapper: {
    justifyContent: "spaceBetween",
    display: "flex",
    float: "left",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    height: "12em",
    marginTop: "1em"
  },
  paper: {
    zIndex: 1,
    // position: 'relative',
    margin: theme.spacing(1),
    width: "100%",
    float: "center",
    display: "inline",
    textAlign: "center",
    height: "100%",
    background: "#92DCE5",
    color: "#2B303A",
    // opacity: ".9",
    backdropFilter: "blur",
    // border: "1px solid rgba(255,255,255,0.2)"
  },
  title: {
      color: "#2B303A",
      marginTop:"64px"
  },
}));
const Portfolio = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(true)
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
    
    return (
        <div><Typography className={classes.title} variant="h3">
                <ReactTyped strings={["Here is an abstract on my projects thus far as an autodidactic programmer."]} typeSpeed={40}/>
            </Typography>
            <div className={classes.wrapper}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
                <Typography variant="h6">Planetary</Typography>
                <Typography variant="h6">Endeavors</Typography>
                <Typography variant="p" style={{fontSize: "1em"}}>Volunteer opportunities database with user interface.</Typography>
            </Paper>
            </Slide>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
                <Typography variant="h6">Lucky Kettle</Typography>
                <Typography variant="h6">Photography</Typography>
                <Typography variant="p" style={{fontSize: "1em"}}>Photographer landing site.</Typography>
            </Paper>
            </Slide>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
                <Typography variant="h6">Expedition</Typography>
                <Typography variant="h6">Mopez</Typography>
                <Typography variant="p" style={{fontSize: "1em"}}>A venture into the paranormal.</Typography>
            </Paper>
            </Slide>
            </div>
        </div>
    )
}

export default Portfolio
