import React from "react";
import Header from "../Components/Header1/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import { NewFooter } from "../Components/Footer/Footer";
import { Container, Typography, Grid, Divider, Breadcrumbs, TextField, Button, Radio } from "@mui/material";
import Link from "next/link";
import FormControlLabel from '@mui/material/FormControlLabel';



import "./aboutStyle.css";

      

function About() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      <Header />
      <TopAbstract />
    
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="text">Text</Button>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
        
      </Typography>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      
     
      <NewFooter />
    </main>
  );
  
  
}

export default About;
