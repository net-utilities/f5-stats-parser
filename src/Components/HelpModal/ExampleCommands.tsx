import Typography from '@mui/material/Typography';
import Command from '../Command/Command';
import * as React from 'react';
import Code from '../Command/Code';
import Box from '@mui/material/Box';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import Button from '@mui/material/Button';

export default function ExampleCommands() {
  return <Box sx={{marginLeft: '5px', padding: '1em',}}>
    <Typography variant='h6' textAlign={'center'}>Example commands</Typography>
    The tool takes input from the <Code text={'tmsh show'}/> command with the <Code text={'field-fmt'}/> parameter.
    <Typography sx={{marginTop: '1em'}}><Command command={`tmsh -c 'cd /;show ltm rule recursive'`}/> gets the iRule stats from all partitions.</Typography>
    <Typography><Command command={`tmsh -c 'cd /;show ltm virtual recursive field-fmt all'`}/> gets the virtual server stats from all partitions.</Typography>
    <Typography sx={{marginBottom: '1em'}}><Command command={`tmsh -c 'cd /;show ltm pool recursive field-fmt all'`}/> gets the pool server stats from all partitions.</Typography>
    <Typography>Yeah, you get it, right? Just <i>always</i> use the <Code text={'field-fmt'}/> and add <Code text={'cd /;'}/> and <Code text={'recursive'}/> and any show command should work.</Typography>
    <Typography mt={2}>
      One last thing. iRules, Virtual Servers and Pools are pre-conditioned to only show some column,
      any other command shows all columns.
    </Typography>
    <Typography>
      This is where the <Button startIcon={<ViewColumnIcon />}>Column</Button> button comes in handy.
    </Typography>
    <Typography>
      Enjoy!
    </Typography>
  </Box>
}