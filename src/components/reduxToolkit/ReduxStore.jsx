import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./ReduxCounterSlice"
const Reduxstore = configureStore({
    reducer:{
        CounterSlice
    }
})
export default Reduxstore
