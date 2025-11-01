import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import React from 'react'
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch}) => {

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ style: { backgroundColor: 'rgba(0,0,0,0.28)' } }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='flex justify-center items-center h-full w-full' style={{ zIndex: 1400 }}>
            <div style={{ zIndex: 1500 }}>
              <CreateNewShorten setOpen={setOpen} refetch={refetch} />
            </div>
        </div>
        {/* <Box>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
      </Modal>
  )
}

export default ShortenPopUp;