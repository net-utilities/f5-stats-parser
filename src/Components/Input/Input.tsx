import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {LTMObject} from '../../Interfaces/interfaces';
import parseRule from '../../Helpers/ParseLTMPaste';
import {useEffect} from 'react';

export default function MultilineTextFields(props: { inputContent: string, setLTMData: (content: LTMObject[]) => void}) {

  const {inputContent, setLTMData} = props;

  useEffect(() => setLTMData(parseRule(inputContent)),[inputContent, setLTMData]);

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
          onChange={e => setLTMData(parseRule(e.target.value))}
        />
    </Box>
  );
}