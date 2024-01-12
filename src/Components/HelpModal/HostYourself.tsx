import * as React from 'react';
import Typography from '@mui/material/Typography';
import {List, ListItem} from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import Command from '../Command/Command';
import Box from '@mui/material/Box';

export default function HostItYourself() {
  return <Box sx={{ marginLeft: '5px', padding: '1em', }}>
    <Typography variant='h6' textAlign={'center'}>Host it yourself</Typography>
    <Typography>
      Everything is done in the browser and nothing is sent anywhere.
      <Typography>That said, if you prefer you can also clone this repo and host it yourself by:</Typography>
      <List dense sx={{ listStyle: "decimal", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText><Typography>Clone the repo on GitHub <GitHubIcon sx={{verticalAlign:"middle", marginBottom: '5px'}} fontSize={'small'}/></Typography></ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText><Typography>Run <Command command={'npm install'}/></Typography></ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText><Typography>Run <Command command={'npm run build'}/></Typography></ListItemText>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <ListItemText><Typography>Copy the content of <strong>./build</strong> to your web server</Typography></ListItemText>
        </ListItem>
      </List>
    </Typography>
  </Box>
}
