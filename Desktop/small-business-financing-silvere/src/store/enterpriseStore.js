import { createSlice } from "@reduxjs/toolkit";
import { Enterprises } from "../assets/data/enterprises";

const enterpriseStore = createSlice({
    name:'enterprises',
    initialState:Enterprises,
    reducers:{

    }
})
export const { increment, decrement, incrementByAmount } = enterpriseStore.actions
export const enterpriseSelector =(id)=> (state)=>state.enterprises.filter((e)=>e.id === id)
export const getEnterprises = (state)=>state.enterprises
const enterpriseReducer = enterpriseStore.reducer
export default enterpriseReducer

