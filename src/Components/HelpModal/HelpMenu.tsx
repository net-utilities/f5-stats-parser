import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import StorageIcon from '@mui/icons-material/Storage';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import {Section} from '../../Interfaces/interfaces';

const tab2Section: {[key: number]: Section} = {
  0: 'about',
  1: 'commands',
  2: 'host'
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs(props: {setActiveSection: (section: Section) => void}) {
  const { setActiveSection } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveSection(tab2Section[newValue] || 'about');
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab icon={<InfoIcon/>} iconPosition={'start'} label="About" {...a11yProps(0)} />
          <Tab icon={<KeyboardIcon/>} iconPosition={'start'} label="Example Commands" {...a11yProps(1)} />
          <Tab icon={<StorageIcon/>} iconPosition={'start'} label="Host if yourself" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </Box>
  );
}