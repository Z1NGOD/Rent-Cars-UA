import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from './ActionsSlice'
export const store = configureStore({
    reducer: actionsReducer,
})