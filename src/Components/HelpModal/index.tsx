import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import HelpContent from './HelpContent';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  height: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 'box-shadow: 8px 8px 5px 0px rgba(0,0,0,0.53)',
  p: 4,
};

interface HelpModalProps {
  setOpen: (state: boolean) => void,
  open: boolean;
}

export default function Index(props: HelpModalProps) {

  const { setOpen, open } = props;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <HelpContent/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}