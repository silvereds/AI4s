import React , { useState } from "react"
import Box  from "@mui/material/Box"
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Link from "@mui/material/Link"
import message from './../../../assets/icons/envellope.svg'
import { StateIndicator , LoansItemText, OperationMenu, LoansTypography } from "./widget"
import { GeneralInfo } from "./GenInfo"
import { Schedule } from "./Schedule"
import { Transactions } from "./Transactions"

const loansTabNames = ['General info' , 'Schedule Repayment' , 'Transactions']

export const LoanInfo = ({loan,enterprise})=>{

    const [tabIndex , setTabIndex] = useState(0)

    return(
    <Box sx={{width:'100%', height:'100%',borderLeft:'1px solid #EFEFEF',p:2}}>
        <Stack direction='row' sx={{justifyContent:'space-between',py:1}}>
            <Stack direction='row' sx={{alignItems:'center'}} spacing={2}>
                <Avatar src={enterprise?.avatar}/>
                <LoansItemText
                    text1={enterprise.name}
                    color1='#121212'
                    text2={enterprise.type}
                />
                <StateIndicator isActive={loan?.isActive} />
            </Stack>
            <Stack direction='row' sx={{alignItems:'center'}} spacing={2}>
                <Box component='img' src={message} sx={{height:20,width:20}}/>
                <OperationMenu/>
            </Stack>
        </Stack>
        <Stack 
            direction='row' 
            sx={{
                justifyContent:'space-between', 
                alignItems:'center',
                height:152,
                width:'100%',
                background:'#F8F8F8',
                px:2
            }}
        >
            <LoansItemText  text1='Original Loan Amount' size1={12} color1='#686868' text2={loan.original_amount + " F"} color2='#605076' size2={18}/>
            <LoansItemText  text1='Outstanding Amount' size1={12} color1='#686868' text2={loan.outstanding_amount+ " F"} color2='#605076' size2={18}/>
            <LoansItemText  text1='Penalty Amount' size1={12} color1='#686868' text2={loan.penalty_amount + " F"} color2='#C5C5C5' size2={18}/>
            <LoansItemText  text1='Loan Term' size1={12} color1='#686868' text2={`${loan.loan_terms } month(s)`} color2='#605076' size2={18}/>
            <Box sx={{background:'#605076',p:2,boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
                <LoansItemText  text1='Monthly installment' size1={12} color1='#DEE0E2' text2={loan.monthly_installment + " F"} color2='#FFFFFF' size2={18}/>
                <LoansTypography 
                    text={<>Due Date : <span style={{color:'#0FB9C5'}}> {loan.due_date} </span></>} 
                    color='#DEE0E2' size={10}
                /> 
            </Box>
        </Stack>

        {/* tab for General info , Schedule Repayment and Transaction */}

        <Box>
            <Stack direction='row' spacing={1} sx={{borderBottom:'1px solid #EFEFEF'}}>
                {loansTabNames.map((name, index)=>(
                        <Link
                            href='#'
                            onClick={()=>setTabIndex(index)}
                            underline='none' 
                            sx={{
                                px:2,
                                py:1.5,
                                borderBottom: tabIndex === index?"3px solid #0FB9C5" :"none"
                            }}
                            key={index}
                        >
                            <LoansTypography
                                size={14}
                                text={name}
                                color={tabIndex === index ? "#0FB9C5":"#686868"} 
                            />
                        </Link>
                    ))
                }
            </Stack>
            
            { tabIndex === 0 && <GeneralInfo loan={loan} enterprise={enterprise}/> }
            { tabIndex === 1 && <Schedule  schedule_repayment={loan.schedule_repayment}/>}
            { tabIndex === 2 && <Transactions loan={loan} enterprise={enterprise}/>}
        </Box>
    </Box>
    )
}