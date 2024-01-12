import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import InfoIcon from '@mui/icons-material/Info';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import StorageIcon from '@mui/icons-material/Storage';
import {Grid} from '@mui/material';
import About from './About';
import ExampleCommands from './ExampleCommands';
import {useState} from 'react';
import HostItYourself from './HostYourself';

export default function HelpMenu() {

  let [activeSection, setActiveSection] = useState<'about'|'commands'|'host'>('about');

  const handleClick = (e: EventTarget): void => {
    const menuText = (e as HTMLSpanElement).textContent;
    if(menuText === 'About') {
      setActiveSection('about');
    } else if(menuText === 'Host It Yourself') {
      setActiveSection('host')
    } else {
      setActiveSection('commands');
    }
  }

  return (
    <Grid container>
      <Grid item xs={3}>
        <Paper sx={{ width: 400, marginTop: '20px', height:'380px', maxWidth: '100%'}} elevation={3}>
          <MenuList>
            <MenuItem>
              <InfoIcon sx={{marginRight: 1}}>
                <ContentCut fontSize="small" />
              </InfoIcon>
              <ListItemText onClick={(e) => {handleClick(e.target)}}>About</ListItemText>
            </MenuItem>
            <MenuItem>
              <KeyboardIcon sx={{marginRight: 1}}>
                <ContentCopy fontSize="small" />
              </KeyboardIcon>
              <ListItemText onClick={(e) => {handleClick(e.target)}}>Example Commands</ListItemText>
            </MenuItem>
            <MenuItem>
              <StorageIcon sx={{marginRight: 1}}>
                <ContentCopy fontSize="small" />
              </StorageIcon>
              <ListItemText onClick={(e) => {handleClick(e.target)}}>Host It Yourself</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        {activeSection === 'about' ? <About/>: activeSection === 'commands' ? <ExampleCommands/>: <HostItYourself/>}
      </Grid>
    </Grid>
  );
}