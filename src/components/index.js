import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';


const useStyles= makeStyles({
    particlesCanva: {
        position:"absolute"
    }
})


const Home = () => {
    const classes = useStyles()
    
    return (
        <>
            <Navbar />
            <Switch>
                    <Route path="/Portfolio"><Portfolio /></Route>
                    <Route path="/Resume"><Resume /></Route>
                    <Route path="/Contact"><Contact /></Route>
                    <Route path="/">
                        <Header />
                                <Particles
                                    canvasClassName={classes.particlesCanva}
                                    params={{
                                    "particles": {
                                    "number": {
                                    "value": 45
                                    }
                                    }
                                    }} 
                                />
                    </Route>
            </Switch>
        </>
    );
};

export default Home;
