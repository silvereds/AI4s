import React, {useState} from 'react'
import  Box  from "@mui/material/Box"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { LoansTypography, TableCellule ,AddNotePenaltyMenu} from "./widget"
import PenaltyModal from './PenaltyModal'
import validString from '../../../utils/isvalidString';
import { boxTableStyle,containerTableStyle,getButtonStyle } from '../loanStyles';
import AddNoteModal from './addNoteModal';

const columns = [ 'Due Date' , 'Amount Due' , 'Paid', 'Date Paid' , 'Penalty' ,' Notes' ,'Status']

export const Schedule = React.memo(({schedule_repayment})=>{

    const [showPenaltyModal , setShowPenaltyModal] = useState(false)
    const [showAddNoteModal , setShowAddNoteModal] = useState(false)
    const [selectedRow,setSelectedRow]= useState()

    if(schedule_repayment.length === 0){
        return (
            <Stack sx={{justifyContent:'center',alignItems:'center',background:'#F8F8F8',minHeight:'30vw'}}>
                <LoansTypography text='No schedule available' />
            </Stack>
        )
    }
    return (
        <Box sx={boxTableStyle}> 
            <LoansTypography text='Schedule Repayment'/>
            <TableContainer  sx={containerTableStyle}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        {columns.map((name,index)=>(<TableCell sx={{border:'none'}} key={index}> <LoansTypography text={name} size={14}/> </TableCell>))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {schedule_repayment.map((row , index) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                '&:nth-of-type(odd)': {
                                    backgroundColor: '#F8F8F8',
                                },
                            }}
                        >
                            <TableCellule status={row.status}>
                                {row.due_date}
                            </TableCellule>
                            <TableCellule status={row.status}>
                                {row.amount_due} F
                            </TableCellule>
                            <TableCellule status={row.status} paid>
                                {row.paid === 0 ? '_ _' : `${row.paid} F`}
                            </TableCellule>
                            <TableCellule status={row.status}>
                                {row.paid === 0 ? '_ _' :row.date_paid}
                            </TableCellule>
                            <TableCellule status={row.status} penalty={row.penalty !== 0} >
                                {row.penalty !== 0 ? row.penalty+ " F" : '_ _'}
                            </TableCellule>
                            <TableCellule status={row.status}>
                                {
                                    validString(row.notes)
                                    ?<Link href='#'  sx={{color:'#0FB9C5'}}>{row.notes}</Link>
                                    :'_ _'
                                }
                            </TableCellule>
                            <TableCellule status={row.status}>
                                <Stack direction='row' spacing={1} sx={{justifyContent:'flex-end'}}>
                                    {
                                        row.status === 'Fully Paid' && (
                                        <Stack sx={getButtonStyle('#0FC52D')}>Fully Paid</Stack>
                                        )
                                    }
                                    {
                                        row.status === 'Partially Paid' && (
                                            <Stack sx={getButtonStyle('#F88122')}>Partially Paid</Stack>
                                        )
                                    }
                                    {
                                        row.status === 'Active' && (
                                            <Stack sx={{alignItems:'center',justifyContent:'center'}}>
                                                <LoansTypography text={row.status} color='#0FC52D'size={14}/>
                                            </Stack>
                                        )
                                    }
                                    {
                                        row.status === 'Overdue' && (
                                            <Stack  sx={getButtonStyle('#FD7575')}>Overdue</Stack>
                                        )
                                    }
                                    <AddNotePenaltyMenu 
                                        row={row}
                                        setSelectedRow={setSelectedRow}
                                        setShowPenaltyModal={setShowPenaltyModal}
                                        setShowAddNoteModal={setShowAddNoteModal}
                                        showAddPenaltyOption={row.status === 'Partially Paid' || row.status === 'Overdue'}
                                    />
                                </Stack>
                            </TableCellule>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PenaltyModal 
                open={showPenaltyModal} 
                setOpen={setShowPenaltyModal}
                selectedRow={selectedRow} 
            />
            <AddNoteModal 
                open={showAddNoteModal} 
                setOpen={setShowAddNoteModal}
                selectedRow={selectedRow}
            />
        </Box>
    )
})