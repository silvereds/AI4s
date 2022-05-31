import { configureStore } from '@reduxjs/toolkit'
import enterpriseReducer from './enterpriseStore'
import loanReducer from './loansStore'

export const globalStore = configureStore({
  reducer: {
    enterprises:enterpriseReducer,
    loans:loanReducer
  },
})