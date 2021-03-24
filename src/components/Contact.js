// import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import{ init } from 'emailjs-com';
// init("user_Xv1ewXuwbb7AZZjl9RYsj");
// const defaultValues = {
//   name: "",
//   age: 0,
//   gender: "",
//   os: "",
//   favoriteNumber: 0,
// };
// const Contact = () => {
//   const [formValues, setFormValues] = useState(defaultValues);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSliderChange = (name) => (e, value) => {
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post('https://portfolio-fc62b-default-rtdb.firebaseio.com/', {
//   firstName: 'Finn',
//   lastName: 'Williams'
// })
// .then((response) => {
//   console.log(response);
// }, (error) => {
//   console.log(error);
// });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container alignItems="center" justify="center" direction="column">
//         <Grid item>
//           <TextField
//             id="name-input"
//             name="name"
//             label="Name"
//             type="text"
//             value={formValues.name}
//             onChange={handleInputChange}
//           />
//         </Grid>
        
//         <Grid item>
//           <TextField
//             id="age-input"
//             name="age"
//             label="Age"
//             type="number"
//             value={formValues.age}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item>
//           <FormControl>
//             <FormLabel>Gender</FormLabel>
//             <RadioGroup
//               name="gender"
//               value={formValues.gender}
//               onChange={handleInputChange}
//               row
//             >
//               <FormControlLabel
//                 key="male"
//                 value="male"
//                 control={<Radio size="small" />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 key="female"
//                 value="female"
//                 control={<Radio size="small" />}
//                 label="Female"
//               />
//               <FormControlLabel
//                 key="other"
//                 value="other"
//                 control={<Radio size="small" />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item>
//           <FormControl>
//             <Select
//               name="os"
//               value={formValues.os}
//               onChange={handleInputChange}
//             >
//               <MenuItem key="mac" value="mac">
//                 Mac
//               </MenuItem>
//               <MenuItem key="windows" value="windows">
//                 Windows
//               </MenuItem>
//               <MenuItem key="linux " value="linux">
//                 Linux
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item>
//           <div style={{ width: "400px" }}>
//             Favorite Number
//             <Slider
//               value={formValues.favoriteNumber}
//               onChange={handleSliderChange("favoriteNumber")}
//               defaultValue={1}
//               step={1}
//               min={1}
//               max={3}
//               marks={[
//                 {
//                   value: 1,
//                   label: "1",
//                 },
//                 {
//                   value: 2,
//                   label: "2",
//                 },
//                 {
//                   value: 3,
//                   label: "3",
//                 },
//               ]}
//               valueLabelDisplay="off"
//             />
//           </div>
//         </Grid>
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </Grid>
//     </form>
//   );
// };
// export default Contact;


import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import Form from './Form'


const useStyles = makeStyles(theme=>({
    email: {
      textDecoration: "none",
      color: "#92DCE5",
      textAlign: "center",
      fontSize: "2em",
    },
    contactCard: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw",
        textAlign: "center",
        zIndex: 1, 
        borderRadius: "25px", 
        
    }
}));


const Contact = () => {
    const classes = useStyles()
    return (
        <div>
            
            <Typography variant="h4" style={{marginTop: "64px"}}>Email is what I check first thing in the morning, so ill get back to you soon.</Typography>
            <Card className={classes.contactCard}><Typography><a href="mailto:joselopez@luckyfrog.io" className={classes.email}>Email Me</a></Typography></Card>
        </div>
    )
}

export default Contact
