import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slices/counterslice";
export const store = configureStore({
    reducer:{
        counter:counterslice,
    },
})