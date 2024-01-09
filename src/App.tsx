import React, {useState} from 'react';
import Input from './Input/Input'
import Table from './Table/Table';

import {Grid} from '@mui/material';
import IRuleStats from './Interfaces/IRuleStats';

function App() {

  let [content, setContent] = useState<IRuleStats[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <Grid mr={10} ml={10}>
          <Grid sx={{textAlign: 'center'}} mb={3}>
            <h4>Paste your iRule stats here (tmsh show rule)</h4>
            This parsing occurs 100% in your browser. If you want to host it yourself you can get the code here:

          </Grid>
          <Grid>
            <Input setContent={setContent}/>
          </Grid>
          <Grid mt={1}>
            <Table content={content}/>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
