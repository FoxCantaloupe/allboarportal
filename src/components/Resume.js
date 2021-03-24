import { Popover, Typography } from '@material-ui/core'
import { Email } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyles = makeStyles(theme=>({
    title: {
      textAlign: "center"
    },
    titles: {
      textAlign: "center",
      fontSize: "2em"
    },
    titlesm: {
      textAlign: "center",
      fontSize: "1.2em"
    },
    email: {
      textDecoration: "none",
      color: "#92DCE5",
      textAlign: "center",
      fontSize: "1.2em"
    }, 
    website: {
      textDecoration: "none",
      color: "#92DCE5",
      textAlign: "center",
      fontSize: "1.2em"
    }, 
    phone: {
      textAlign: "center"
    },
    content: {
      textAlign: "center",
    },
    whole: {
      marginTop:"64px"
    }
}));

const Resume = () => {
  const classes = useStyles()
  return (
    <div className={classes.whole}>
      
      <Typography className={classes.title} variant="h3">Jose Lopez Jr</Typography>
      <Typography  className={classes.title} variant="h4">Front-end web development</Typography>
      <Typography className={classes.phone}>"813”+”359”+”7564” </Typography>
      <Typography className={classes.email} ><a href="mailto:joselopez@luckyfrog.io" className={classes.email}>Email Me</a></Typography>
      
      <Typography className={classes.titles}>Profile</Typography>
      <Typography className={classes.content}>Passionate Software Engineer, working on simplifying
tasks or cutting the fat when it comes to automation.</Typography>
      <Typography className={classes.titles}>Experience</Typography>
      <Typography className={classes.titlesm}>DEVELOPER • <a href="luckyfrog.io" className={classes.website}>LUCKYFROG.IO</a> • AUGUST 2020 – PRESENT</Typography>
      <Typography className={classes.content}>Applying current trends in both React Native, and DAPP
projects. Developing independent applications to test in
the future market for needs yet unmet.</Typography>
      <Typography className={classes.titlesm}>SHIFT MANAGER • STARBUCKS • AUGUST 2013 – NOVEMBER 2020</Typography>
      <Typography className={classes.content}>Staying engaged with customers and keeping open
communication between peers. Work place model was
centered around every level being able to coach in the
moment; both giving and receiving.
</Typography>
      <Typography className={classes.titles}>Education</Typography>
      <Typography className={classes.titlesm}>APPLIED MATHEMATICS • UNIVERSITY OF SOUTH FLORIDA</Typography>
      <Typography className={classes.content}>Learned the value of Mathematics and its applications
outside of theory, and formal institutions.
</Typography>
      <Typography className={classes.titles}>Skills</Typography>
      <Typography className={classes.content}>HTML,CSS</Typography>
      <Typography className={classes.content}>JavaScript: React</Typography>
      <Typography className={classes.content}>Python</Typography>
      <Typography className={classes.content}>Group:<a href="https://github.com/FoxCantaloupe">Github</a></Typography>
    </div>
  )
}

export default Resume
