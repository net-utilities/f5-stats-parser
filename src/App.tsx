import React, {useState} from 'react';
import Input from './Input/Input'
import Table from './Table/Table';

import {Grid, Paper} from '@mui/material';
import IRuleStats from './Interfaces/IRuleStats';

function App() {

  let [content, setContent] = useState<IRuleStats[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <Grid mr={10} ml={10}>
          <Grid sx={{textAlign: 'center'}} mb={3}>
            <h4>Paste your iRule stats here (tmsh show rule)</h4>
            This parsing occurs 100% in your browser but
            if you want to host it yourself you can get the
            code <a href={"https://github.com/net-utilities/irule-stats-parser"}>here</a>.
          </Grid>
          <Grid>
            <Paper>
              <Input setContent={setContent}/>
            </Paper>
          </Grid>
          <Grid mt={1}>
            <Paper>
            <Table content={content}/>
            </Paper>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
