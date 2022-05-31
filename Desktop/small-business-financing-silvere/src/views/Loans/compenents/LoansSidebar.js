import Box from '@mui/material/Box'
import { LoansItem, LoansTypography, SearchInput } from './widget'
import  Stack from '@mui/material/Stack'

const LoansSidebar = ({loans,enterprises,setSelected,selectedLoan})=>{
    
    function getEnterprise(loan){
        let e = enterprises.filter(e=>e.id === loan.enterprise_id)[0]
        return e  
    }
    
    return(
        <Box>
            <Stack sx={{px:2,py:2}} spacing={2}>
                <LoansTypography text='Loans' size={20}/>
                <SearchInput/>
            </Stack>
            <Stack sx={{ overflowY:'auto',height:'70vh',pb:5}}>
                {
                    loans.slice(0,4).map((loan, index)=>(
                        <LoansItem 
                            name={getEnterprise(loan).name}
                            description={getEnterprise(loan).type}
                            amount={loan?.outstanding_amount}
                            labelInfo={loan.isActive? 'Next payment : ':'Payment Overdue on :'}
                            isActive={loan.isActive}
                            avatarUrl={getEnterprise(loan).avatar}
                            isSelected={selectedLoan.id === loan.id}
                            key={index}
                            setSelected={()=>setSelected(loan)}
                        />
                    ))
                }
            </Stack>
        </Box>
    )
}
export default LoansSidebar