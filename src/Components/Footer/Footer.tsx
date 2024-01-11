import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import PolylineIcon from '@mui/icons-material/Polyline';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ruleExampleData from '../../ExampleData/ruleExampleData';
import vipExampleData from '../../ExampleData/vipExampleData';
import poolExampleData from '../../ExampleData/poolExampleData';

interface FooterProps {
  setInputContent: (content: string) => void,
  setOpen: (state: boolean) => void,
}


export default function Footer(props: FooterProps) {
  const {setInputContent, setOpen } = props;
  const [value, setValue] = React.useState(null);
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="About" onClick={() => { setOpen(true) }} icon={<InfoIcon />} />
          <BottomNavigationAction label="Pool example"  onClick={() => {setInputContent(poolExampleData)}}icon={<PolylineIcon />} />
          <BottomNavigationAction label="VIP example" onClick={() => {setInputContent(vipExampleData)}} icon={<VerticalAlignBottomIcon />} />
          <BottomNavigationAction label="iRule example" onClick={() => {setInputContent(ruleExampleData)}} icon={<DataObjectIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
