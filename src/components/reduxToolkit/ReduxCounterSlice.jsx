import { createSlice } from "@reduxjs/toolkit";

const Counterslice=createSlice({
    name:"counter-slice",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
             state.value +=1
        },
        decrement:(state)=>{
            state.value > 0 ? state.value-=1: alert("cannot decrement from zero")
           
        },
        add:(state,action)=>{
            state.value+=action.payload 

        },
        subtract:(state,action)=>{
            state.value-=action.payload

        },
        reset:(state)=>{
         state.value=0
        }
    }
})
export const {increment,decrement,reset,add,subtract} = Counterslice.actions
export default Counterslice.reducer
/////////
