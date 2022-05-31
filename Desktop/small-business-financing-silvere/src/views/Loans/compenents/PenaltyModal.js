import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { LoansTypography } from './widget';
import amount_icon from './../../../assets/icons/amount.svg'
import add_doc from './../../../assets/icons/add_doc.svg'
import arrow_dropdown_down from './../../../assets/icons/arrow_dropdown_down.svg'
import  InputBase  from '@mui/material/InputBase';
import {style,status_style ,textareaStyle , buttonStyle} from '../loanStyles'
import Select from '@mui/material/Select';
import MenuItem  from '@mui/material/MenuItem';
import { Button } from '@mui/material';


const SelectReason = ()=>{
    const [reason, setReason] = React.useState('');
    const handleChange = (event) => {
      setReason(event.target.value);
    };
    return(
        <>
            <Select
                displayEmpty
                size='small'
                value={reason}
                onChange={handleChange}
                renderValue={(selected)=> selected.length === 0 ?
                                            <LoansTypography text='select reason' color='#C5C5C5'/>
                                            :selected
                            }
                input={<InputBase sx={{height:40,border:'1px solid #C5C5C5',borderRadius:1,color:'#121212',px:1}} />}
                IconComponent={()=><Box component='img' src={arrow_dropdown_down} sx={{height:10,width:10}}/>}
            >
                <MenuItem value='' sx={{width:'110%',color:'#121212'}} disabled>Select reason</MenuItem>
                <MenuItem value='Payment Overdue' sx={{width:'100%',color:'#121212'}}>Payment Overdue</MenuItem>
                <MenuItem value='Late Payment' sx={{width:'100%',color:'#121212'}}> Late Payment</MenuItem>
                <MenuItem value='Other' sx={{width:'100%',color:'#121212'}}> Other</MenuItem>
            </Select>
            {
                reason === 'Other' &&
                (<Stack sx={{py:1}}>
                    <LoansTypography text='Other' size={14}/>
                    <textarea
                        //onChange={handleChange}
                        placeholder='Type...'
                        style={textareaStyle}
                    />
                </Stack>)
            }
        </>
        
    )
}

export default function PenaltyModal({open ,setOpen}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            
                <Stack sx={style}>
                    <LoansTypography text='Penalty' />
                    <LoansTypography
                        textAlign='center'
                        size={12} color='#0FB9C5' text='The penalty will automatically be added to the Outstanding amount.'
                    />
                    <Stack direction='row' sx={{justifyContent:'space-between',width:'100%',mt:2,px:1,py:1}}>
                        <LoansTypography size={12} text='Due Date'  />
                        <LoansTypography size={12} text='Amount Due' />
                        <LoansTypography size={12} text='Amount Paid' />
                        <LoansTypography size={12} text='Status' />
                    </Stack>
                    <Stack direction='row' sx={{justifyContent:'space-between',width:'100%',py:1,px:1,background:'#FFEDED'}}>
                        <LoansTypography size={12} text='12-07-2022'  />
                        <LoansTypography size={12} text='60 , 000 F' />
                        <LoansTypography size={12} text='0 F' />
                        <Stack sx={status_style}>
                            Overdue
                        </Stack>
                    </Stack>
                    <Box sx={{width:'90%',mt:2}}>
                        <Stack>
                            <Stack direction='row' spacing={1} sx={{py:1}}>
                                <Box component='img' src={amount_icon} sx={{widht:17,height:17}}/>
                                <LoansTypography color='#5D5C5C' text='Penalty Amount' size={14} />
                            </Stack>
                            <InputBase
                                sx={{
                                    height:40,
                                    border:'1px solid #C5C5C5',
                                    width:'100%',
                                    color:'#121212',
                                    px:2,
                                    borderRadius:1
                                }}
                                endAdornment={<LoansTypography text='Franc' size={16} color='#C5C5C5'/>}
                            />
                        </Stack>
                        <Stack sx={{mt:2}}>
                            <Stack direction='row' spacing={1} sx={{py:1}}>
                                <Box component='img' src={add_doc} sx={{widht:20,height:20}}/>
                                <LoansTypography color='#5D5C5C' text='Reason for Penalty' size={14}/>
                            </Stack>
                            <SelectReason />
                            <Button sx={buttonStyle}>
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            
        </Modal>
    </div>
  );
}
