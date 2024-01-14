import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import HelpMenu from './HelpMenu';
import {useState} from 'react';
import About from './About';
import ExampleCommands from './ExampleCommands';
import HostItYourself from './HostYourself';
import {Section} from '../../Interfaces/interfaces';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: 500,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 'box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.53)',
};

interface HelpModalProps {
  setOpen: (state: boolean) => void,
  open: boolean;
}

export default function Index(props: HelpModalProps) {

  const { setOpen, open } = props;
  const handleClose = () => setOpen(false);

  let [activeSection, setActiveSection] = useState<Section>('about');


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <HelpMenu setActiveSection={setActiveSection}/>
            {activeSection === 'about' ? <About/>: activeSection === 'commands' ? <ExampleCommands/>: <HostItYourself/>}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}