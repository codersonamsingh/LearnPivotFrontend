"use client"
import React from "react";
import Header from "../Components/Header1/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import { NewFooter } from "../Components/Footer/Footer";
import { Typography, Grid, Divider, Button, Radio, Box, Stack, Chip, List, TextField, CardContent, CardMedia, Card, CardActions } from "@mui/material";
import Link from "next/link";
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';




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
      <Stack spacing={1} alignItems="center">
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      </Stack>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
    
      <Button variant="text">Text</Button>
      <Typography variant="h4" gutterBottom>
     
  
        My rule rugaltion
      
      </Typography>
    
      <Grid container spacing={2}>
    
      <Grid item xs={5}   style={{  marginRight: 20, marginLeft:50, backgroundColor:"pink" }}>
      <Typography variant="body1" gutterBottom>
      
        Those student who intrested so,please they fill our from and they know our rule ragulation
        which will benefits for both of us..Thanking you for visit here vv
        
   
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
