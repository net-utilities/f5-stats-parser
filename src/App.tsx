import React, {useState} from 'react';
import './index.css';
import Input from './Components/Input/Input'
import Table from './Components/Table/Table';
import Typography from '@mui/material/Typography';
import {Grid, Paper} from '@mui/material';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import {LTMObject} from './Interfaces/ltmObjects';
import Footer from './Components/Footer/Footer';
import Index from './Components/HelpModal';
import InfoIcon from '@mui/icons-material/Info';
import Code from './Components/Command/Code';

function App() {

  let [content, setContent] = useState<LTMObject[]>([]);
  const [inputContent, setInputContent] = useState<string>('')

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Grid container mt={4}>
        <Grid item xs={12} sx={{textAlign: 'center'}} mb={3}>
          <Typography variant='h4' mb={1}>F5 TMSH Stats Generator</Typography>
          <Typography display={'inline'}>
            Creates <Typography display={'inline'} fontWeight={'bold'} color={'#0e6eb9'}>order</Typography> from <Typography display={'inline'} fontWeight={'bold'} color={'#e30f37'}>tmsh</Typography> chaos. Check out the About <InfoIcon sx={{verticalAlign: 'middle', marginBottom: '4px'}} color='primary'/> below <TurnRightIcon sx={{marginTop: '5px', verticalAlign: 'middle', transform: 'rotate(90deg)'}}/> </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Input inputContent={inputContent} setContent={setContent}/>
          </Paper>
        </Grid>
        <Grid item xs={12} mt={1}>
          <Paper elevation={3}>
            { content.length > 0 ? <Table content={content}/>: '' }
          </Paper>
        </Grid>
      </Grid>
      <Index open={open} setOpen={setOpen}/>
      <Footer setInputContent={setInputContent} setOpen={setOpen}/>
    </div>
  );
}

/*
 <Typography>This parsing occurs 100% in your browser but
 if you want to host it yourself you can get the
 code <Link href={"https://github.com/net-utilities/irule-stats-parser"} underline="none">here</Link>.
 </Typography>
 */

export default App;
