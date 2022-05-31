import { createSlice } from "@reduxjs/toolkit";
import { loans as Loans } from "../assets/data/loans";

const loanStore = createSlice({
    name:'loans',
    initialState:Loans,
    reducers:{

    }
})
export const { increment, decrement, incrementByAmount } = loanStore.actions
export const getLoans = (state)=>state.loans
const loanReducer = loanStore.reducer
export default loanReducer

