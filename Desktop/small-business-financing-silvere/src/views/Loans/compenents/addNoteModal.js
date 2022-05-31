import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { LoansTypography } from './widget';
import {style,textareaAddNoteStyle , buttonStyle} from '../loanStyles'
import { Button } from '@mui/material';

const AddNoteModal = ({open ,setOpen,selectedRow})=>{
    const [note,setNote] = React.useState('')
    const handleChange = (e)=>setNote(e.target.value)
    const handleClose = () => setOpen(false);

    const addNote = ()=>{
        console.log(note)
        handleClose()
    }

  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack sx={{...style,width:'40%'}}>
                <LoansTypography text='New Note' />
                <textarea
                    onChange={handleChange}
                    placeholder='Type...'
                    style={textareaAddNoteStyle}
                />
                <Box sx={{width:'90%'}}>
                    <Stack>
                        <Button sx={buttonStyle} onClick={addNote}>
                            Submit
                        </Button>
                    </Stack>
                </Box>
            </Stack>
        </Modal>
    </div>
  );
}
export default AddNoteModal
