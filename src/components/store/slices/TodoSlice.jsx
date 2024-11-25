import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodo = createAsyncThunk("fetch",async()=>{
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/todos")
        response = await response.json()

    }catch(error){
        console.log(error)
    }
})
const todoSlice = createSlice({
    name:"todoSlice",
})
export default todoSlice.reducer;