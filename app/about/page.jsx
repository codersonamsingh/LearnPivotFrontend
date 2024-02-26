"use client"
import React from "react";
import Header from "../Components/Header1/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import { NewFooter } from "../Components/Footer/Footer";
import { Typography, Grid, Divider, Button, Radio, Box, Stack, Chip, List, TextField, CardContent, refreshMessages, CardMedia, Card, CardActions, AppBar, Toolbar, IconButton, Select, Checkbox } from "@mui/material";
import Link from "next/link";
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';




import "./aboutStyle.css";
import MyStepper from "../Components/About/Steper";
import BottomAppBar from "../Components/About/Cod";

      

function About() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
   <MyStepper />   
   <BottomAppBar />
   
   <Checkbox {...label} defaultChecked />

  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
     
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2024" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2024" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vacation" secondary="July 20, 2024" />
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

        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://ischoolconnect.com/blog/wp-content/uploads/2022/10/isc-11.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Study
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Grid style={{ marginRight: 20, marginLeft:10, backgroundColor:"yellow"}}>
          Study Hard, No matter if it seems impossible, no matterif it takes time, no matter if you have up to all night,
          just Remember that the feeling of success is the best thing in entire World..</Grid>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

     


     
      <NewFooter />
    </main>
  );
  
  
}

export default About;
