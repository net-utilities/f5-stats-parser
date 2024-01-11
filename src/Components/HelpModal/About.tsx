import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


import * as React from 'react';
import Box from '@mui/material/Box';
import Code from '../Command/Code';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import Button from '@mui/material/Button';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import InfoIcon from '@mui/icons-material/Info';
import poolExampleData from '../../ExampleData/poolExampleData';
import PolylineIcon from '@mui/icons-material/Polyline';
import vipExampleData from '../../ExampleData/vipExampleData';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import ruleExampleData from '../../ExampleData/ruleExampleData';
import DataObjectIcon from '@mui/icons-material/DataObject';

export default function About() {
  return <Box sx={{ marginLeft: '5px', padding: '1em', }}>
      <Typography variant='h6' textAlign={'center'}>About this tool</Typography>
      <Typography>
        This tool takes output from F5 tmsh show commands and creates a table.
        Everything is done in the browser and nothing is sent anywhere.

        <Typography mt={1} mb={1}>Check out the <Code text='Commands'/> menu option here to the left to figure out how to get the data
          from your f5s.</Typography>
        <Typography>After you've pasted the output of a command you'll get a table containing the data. You can explore different columns by clicking
          on <Button startIcon={<ViewColumnIcon />}>
          Columns
        </Button>, or try filtering/sorting the columns.</Typography>
      </Typography>

    <Typography mt={2}>
      You can also try the sample Pool data <PolylineIcon fontSize={'small'} />,
      Virtual Server data <VerticalAlignBottomIcon  fontSize={'small'} /> or
      iRule data <DataObjectIcon fontSize={'small'} /> buttons at the bottom.
    </Typography>
    </Box>
}