import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import InputAdornment  from '@mui/material/InputAdornment'
import Search  from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TableCell from '@mui/material/TableCell';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import add_doc from './../../../assets/icons/add_doc.svg'
import flag from './../../../assets/icons/flag.svg'


export const AddNotePenaltyMenu = ({
    setShowAddNoteModal,
    setShowPenaltyModal,
    showAddPenaltyOption,
    row,
    setSelectedRow
})=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const openMenu = (event)=>setAnchorEl(event.currentTarget);

    const openPenaltyModal = (event) => {
        setSelectedRow(row)
        setShowPenaltyModal(true)
        setAnchorEl(null);
    };
    const openAddNoteModal = ()=>{
        setSelectedRow(row)
        setShowAddNoteModal(true)
        setAnchorEl(null);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="add-note-penalty-button"
                aria-controls={open ? 'add-note-penalty' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={openMenu}
                sx={{
                    background:'#EAE6EE',
                    textTransform:'none',
                    color:"#FFFFFF",
                    height:25,
                    width:25,
                    '&:hover':{
                        background:'#EAE6EE'
                    }
                }}
            >
                <MoreVertIcon sx={{color:'#605076'}}/>
            </IconButton>
            <Menu
                id="add-note-penalty"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'add-note-penalty',
                }}
            >
                <Stack>
                    <MenuItem onClick={openAddNoteModal}>
                        <ListItemIcon>
                            <Box component='img' src={add_doc}sx={{height:20,width:20}} />
                        </ListItemIcon>
                        <ListItemText>
                            <LoansTypography size={12} text='Add Note' />
                        </ListItemText>
                        
                    </MenuItem>
                    {showAddPenaltyOption && 
                        <MenuItem onClick={openPenaltyModal}>
                            <ListItemIcon>
                                <Box component='img' src={flag}sx={{height:20,width:20}} />
                            </ListItemIcon>
                            <ListItemText>
                                <LoansTypography size={12} text='Add Penalty' color='#FD7575' />
                            </ListItemText>
                        </MenuItem>
                    }
                </Stack>
            </Menu>
        </div>
    );
}

export const OperationMenu = ()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<ArrowDropDownIcon sx={{color:"#FFFFFF"}} />}
                sx={{
                    background:'#0FB9C5',
                    textTransform:'none',
                    color:"#FFFFFF",
                    height:30,
                    '&:hover':{
                        background:'#0FB9C5'
                    }
                }}
            >
                Operations
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <Stack>
                    <MenuItem onClick={handleClose}>Add transaction</MenuItem>
                    <MenuItem onClick={handleClose}>Add Penalty </MenuItem>
                    <MenuItem onClick={handleClose}> Write-off  </MenuItem>
                </Stack>
            </Menu>
        </div>
    );
}

export const SearchInput = ({onChange})=>(
    <InputBase
        size='small'
        sx={{
            background:'#F7F7F7',
            height:40,
            borderRadius:2,
            fontSize:14,
            color:'#605076s',
            fontWeight:'semibold'
        }}
        fullWidth
        startAdornment={<InputAdornment position="start"> <Search sx={{height:20,width:20}}/> </InputAdornment>}
        
    />
)

export const LoansTypography = ({text,size='1vw',color='#605076',textAlign='left',fontWeight=600})=>(
    <Typography
        sx={{
            fontSize:size,
            color:color,
            textAlign:textAlign,
            //fontWeight:fontWeight
        }}
    >
        {text}
    </Typography>
)
export const LoansItemText = ({text1,text2,size1=16,size2=12,color1='#605076',color2='#909293',textAlign='left'})=>(
    <Stack>
        <LoansTypography 
            text={text1}
            textAlign={textAlign}
            size={size1}
            color={color1}
        />
        <LoansTypography 
            text={text2}
            color={color2}
            textAlign={textAlign}
            size={size2}
        />
    </Stack>
)

export const StateIndicator = ({isActive=true})=>(
    <Stack
        sx={{
            fontSize:10,
            background:isActive?'#C8FBD0':'#FFEDED',
            color:isActive?'#0FC52D':'#FD7575',
            height:21,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            width:67,
        }}
    >
        { isActive ? 'Active':'Overdue'}
    </Stack>
)

export const LoansItem = React.memo(({name,avatarUrl,isActive,isSelected,description,amount,date='23 jan 2022',labelInfo,setSelected})=>(
    <Link underline='none' href="#" onClick={setSelected}>
        <Stack sx={{px:2,py:1,background:isSelected?'#DAFAFC':'#FFFFFF','&:hover':{background:'#DAFAFC'} }}>
            <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between'}}>
                <Stack direction='row' sx={{alignItems:'center'}} spacing={2}>
                    <Avatar src={avatarUrl}/>
                    <LoansItemText
                        text1={name}
                        //color1='#121212'
                        text2={description}
                    />
                </Stack>
                <Stack>
                    <LoansItemText 
                        text1={amount +' F'}
                        color1='#605076'
                        text2='Outstanding amount'
                        textAlign="right"
                    />
                </Stack>
            </Stack>
            <Stack direction='row' sx={{alignItems:'center',justifyContent:'space-between',mt:1}} >
                <Stack direction='row' spacing={1}>
                    <LoansTypography text={labelInfo} color='#959595' size={10}/>
                    <LoansTypography text={date} color={isActive?'#0FC52D':'#FD7575'} size={10}/>
                </Stack>
                <StateIndicator isActive={isActive}/>
            </Stack>
        </Stack>
    </Link>
))

export const TableCellule = (props)=>{
    function getCellStyles(){
        switch(props.status){
            case 'Fully Paid' : return {background:'#C8FBD0', color:props.paid ? '#0FC52D':(props.penalty? '#FD7575':'') };
            case 'Partially Paid' : return {background:'#FFF1E3',color:props.paid?'#F88122':(props.penalty? '#FD7575':'')};
            case 'Overdue':return {background:'#FFEDED' , color:props.paid ? '#FD7575':(props.penalty? '#FD7575':'') };
            default: return
        }
    }

    return(
        <TableCell align="left" sx={{border:'none',...getCellStyles()}}>
            {props.children}
        </TableCell>
    )
}