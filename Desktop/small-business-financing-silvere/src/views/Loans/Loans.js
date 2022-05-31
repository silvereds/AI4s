import Grid  from "@mui/material/Grid";
import React, { useState , useMemo, useCallback} from "react";
import Header from "../../components/Header/Header";
import { LoanInfo } from "./compenents/LoanInfo";
import LoansSidebar from "./compenents/LoansSidebar";
import { useSelector } from "react-redux";
import { getLoans } from "../../store/loansStore";
import { getEnterprises } from "../../store/enterpriseStore";


const Loans = () => {
  const loans = useSelector(getLoans)
  const Enterprises = useSelector(getEnterprises)
  const [selectedLoan , setSelectedLoan] = useState(loans[0])
  const [selectedEnterprise,setSelectedEnterprise] = useState(Enterprises.filter(e=>e.id === loans[0].enterprise_id)[0])
  const setSelected =(loan)=>{
    setSelectedLoan(loan)
    setSelectedEnterprise(Enterprises.filter(e=>e.id === loan.enterprise_id)[0])
  }

  return (
    <div>
      <Header pageName="loans" />
        <Grid container>
          <Grid item md={4} sx={{background:'#FFFFFF'}}>
            <LoansSidebar 
              loans={loans} 
              enterprises={Enterprises} 
              setSelected={setSelected} 
              selectedLoan={selectedLoan} 
            />
          </Grid>
          <Grid md={8} item sx={{background:'#FFFFFF'}}>
            <LoanInfo loan={selectedLoan} enterprise={selectedEnterprise}/>
          </Grid>
        </Grid>
    </div>
  );
};

export default Loans;
