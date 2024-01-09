import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect} from 'react';
import ParseRule from '../Helpers/ParseRule'
import IRuleStats from '../Interfaces/IRuleStats';
import parseRule from '../Helpers/ParseRule';

export default function MultilineTextFields(props: {setContent: (content: IRuleStats[]) => void}) {

  const {setContent} = props;

  return (
    <Box
      component="form"
      width={'100%'}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="outlined-multiline-static"
          label="F5 Input"
          multiline
          rows={4}
          sx={{width: '100%'}}
          onChange={e => setContent(parseRule(e.target.value))}
        />
    </Box>
  );
}