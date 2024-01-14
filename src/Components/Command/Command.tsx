import * as React from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {Tooltip} from '@mui/material';
import Code from './Code';

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
    <span onClick={copyCommand}>
      <Code
        text={command}
      />
      <ContentCopyIcon
        onClick={copyCommand}
        sx={{cursor: 'pointer', fontSize: '16px', marginLeft: '2px', "& :hover": {color:"#bbb"}, "& :active": {color:"#bbb"}}}
      />
    </span>
  </Tooltip>

}
