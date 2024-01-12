import * as React from 'react';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Tooltip} from '@mui/material';
import Code from './Code';
import Box from '@mui/material/Box';

export default function Command(props: {command: string}) {

  const {command} = props;

  const copyCommand = () => {
    navigator.clipboard.writeText(command).then(() => {
      /* Resolved - text copied to clipboard successfully */
    },() => {
      console.error('Failed to copy');
      /* Rejected - text failed to copy to the clipboard */
    });
  }

  return <Tooltip title="Click to copy" placement="top">
    <Box onClick={copyCommand} display={'inline'}>
      <Code
        text={command}
      />
      <ContentCopyIcon
        onClick={copyCommand}
        sx={{cursor: 'pointer', fontSize: '16px', marginLeft: '2px', "& :hover": {color:"#bbb"}, "& :active": {color:"#bbb"}}}
      />
    </Box>
  </Tooltip>

}
