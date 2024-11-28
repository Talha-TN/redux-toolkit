import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const fetchTodo =createAsyncThunk("fetchtodo,",async ()=>{ // fetch to do action
     let response = await fetch("https://jsonplaceholder.typicode.com/todos")
     response= await  response.json()
     return response
     
})
const todoSlice = createSlice({
    name :"todoSlice",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{ // for listen to changes in fetchTodo action
    builder.addCase(fetchTodo.pending,(state,action)=>{
        state.isLoading=true
    }),
    builder.addCase(fetchTodo.fulfilled,(state,action)=>{
        state.isLoading =true
        state.data=action.payload
    }),
    builder.addCase(fetchTodo.rejected,(state,action)=>{
        console.log("error",action.payload)
        state.isError=true
    })
    }
})
export default todoSlice.reducer