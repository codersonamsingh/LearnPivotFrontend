"use client"
import React from "react";
import Header from "../Components/Header1/Header";
import { TopAbstract } from "../MyApp";
import Enquiry from "../Components/Enquiry/Enquiry";
import { NewFooter } from "../Components/Footer/Footer";
import { Typography, Grid, Divider, Button, Radio, Autocomplete, Rating, Badge, Box,content, Stack, Chip, List, TextField, CardContent, refreshMessages, CardMedia, Card, 
 CardActions, AppBar, Toolbar,Tooltip,IconButton, Skeleton,Select, CssBaseline, Pagination, Checkbox,CircularProgress,SnackbarContent, styled, SpeedDial, SpeedDialIcon, SpeedDialAction, Paper, ListItemIcon, MenuList, Container,
  } from "@mui/material";
 import MailIcon from '@mui/icons-material/Mail';

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
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';


import "./aboutStyle.css";
import MyStepper from "../Components/About/Steper";
import BottomAppBar from "../Components/About/Cod";
import  DiscreteSliderMarks from"../Components/About/slider";
import  ToggleButtons from"../Components/About/toggle";
import  EnhancedTable from"../Components/About/Table";
import  AlertDialog from"../Components/About/Alert";
import  IconMenu from"../Components/About/Menu";
import HorizontalLinearStepper from "../Components/About/Steeper";
import BasicTabs from "../Components/About/Tabs";
import StandardImageList from "../Components/About/Image";


 

function About() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const content = (
    <p>{`I think this app is Useful to us Soo,.
   " Resarch is creating new knowledge..."`}</p>
  );
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
   < DiscreteSliderMarks />
   <ToggleButtons />
   <EnhancedTable />
   <AlertDialog />
   <IconMenu />
   <HorizontalLinearStepper />
   <BasicTabs />
   <StandardImageList />
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
    <Button variant="contained">Contained</Button>
    

    <Grid item xs={5}   style={{  marginRight: 60, marginLeft:50 }}>
     <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
     
    <Autocomplete
      disablePortal
      id="combo-box-demo"
     // options={top10Games}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Game" />}
    />
     </Grid>
     <Stack direction="row" spacing={2}>

     <Avatar alt="Travis Howard" src="https://t4.ftcdn.net/jpg/03/69/19/81/360_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg" />
     </Stack>
     <Grid item xs={5}   style={{  marginRight: 60, marginLeft:50, backgroungColour:"pink" }}>
     <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    </Grid>
    <Stack direction="row" spacing={1}>
      <Chip label="Chip Filled" />
      <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
    {content}
      <Divider>CENTER</Divider>
      <Tooltip title="Delete">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    <Grid style={{ marginRight: 50, marginLeft:80, backgroundColor:"pink"}}>
    <Div>{"Work hard in SLIENCE Let Success Make The NOISE."}</Div>;
    </Grid>
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      
    </Stack>
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      </Stack>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    <Pagination count={10} />
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
    <Box component="section" sx={{ p: 4, border: '1px dashed grey' }}>
      This Box renders as an HTML section element.
    </Box>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
     <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </Box>

      <NewFooter />
    </main>
    
  );
  
  
}

export default About;
