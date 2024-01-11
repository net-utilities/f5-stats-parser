import * as React from 'react';
import Typography from '@mui/material/Typography';
import {ReactElement} from 'react';

export default function Code(props: { text: string}) {

  const {text} = props;

  return <Typography
    sx={{
      cursor: 'pointer',
      background: '#eee',
      display: 'inline',
      paddingLeft: '3px',
      paddingRight: '3px',
      paddingTop: '1px',
      paddingBottom: '1px'
    }}
  >
    {text}
  </Typography>

}
