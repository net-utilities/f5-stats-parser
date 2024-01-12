import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {LTMObject} from '../../Interfaces/ltmObjects';
import parseRule from '../../Helpers/ParseLTMPaste';
import {ChangeEvent, useEffect} from 'react';

export default function MultilineTextFields(props: { inputContent: string, setContent: (content: LTMObject[]) => void}) {

  const {inputContent, setContent} = props;

  useEffect(() => setContent(parseRule(inputContent)),[inputContent]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = (e as ChangeEvent<HTMLInputElement>).target;
    if(target) {
      setContent(parseRule(target.value))
      return;
    }
    if(inputContent){
      setContent(parseRule(inputContent))
    }
  }

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
          onChange={e => setContent(parseRule(e.target.value))}
        />
    </Box>
  );
}