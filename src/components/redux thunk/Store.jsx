import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./ToDoSlice.jsx"
const Store = configureStore({
    reducer:{
        todoSlice,
    }
})
export default Store;