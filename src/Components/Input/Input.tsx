import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect} from 'react';

export default function MultilineTextFields(
  props: {
    inputContent: string,
    setInputContent: (inputContent: string) => void
  }) {

  const {setInputContent, inputContent} = props;

  return (
    <Box
      component="form"
      width={'100%'}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-multiline-static"
          label="tmsh command output"
          multiline
          rows={4}
          value={inputContent}
          sx={{width: '100%'}}
          onChange={e => setInputContent(e.target.value)}
        />
    </Box>
  );
}