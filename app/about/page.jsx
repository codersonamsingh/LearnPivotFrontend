"use client"
import React from "react";
import Header from "../Components/Header1/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import { NewFooter } from "../Components/Footer/Footer";
import { Container, Typography, Grid, Divider, Breadcrumbs, TextField, Button, Radio, Box } from "@mui/material";
import Link from "next/link";
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




import "./aboutStyle.css";

      

function About() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Header />
      <TopAbstract />
    
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="text">Text</Button>
      <Typography variant="h4" gutterBottom>
  
        My rule rugaltion
      
      </Typography>
    
      <Grid container spacing={2}>
    
      <Grid item xs={5}   style={{  marginRight: 20, marginLeft:50, backgroundColor:"pink" }}>
      <Typography variant="body1" gutterBottom>
      
        Those student who intrested so,please they fill our from and they know our rule ragulation
        which will benefits for both of us..Thanking you for visit here
        
   
      </Typography>
      </Grid>
    
  <Grid item xs={3}>
  <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  </Grid>


</Grid>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        const [age, setAge] = React.useState('');

     


     
      <NewFooter />
    </main>
  );
  
  
}

export default About;
