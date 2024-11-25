import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset ,add,subtract} from './ReduxCounterSlice'
const ReduxCounter = () => {
    const [data,setdata]=useState("")
    const count = useSelector((state)=>state.CounterSlice.value)
    const dispatch = useDispatch()
 
    const handleAdd=()=>{
        let inputValue = Number(data)
        dispatch(add(inputValue))
        setdata("")
        console.log("add has been clicked")
    }
    const handleSubtract=()=>{
    let inputValue = Number(data)
        dispatch(subtract(inputValue))
        setdata("")
        console.log("subtract has been clicked")
    }
    console.log("render")
  return (
    <center>
        <p>{count}</p>
       <input value={data} type="text" placeholder='add or subtract' onChange={(e)=>setdata(e.target.value)}/>
        <button onClick={()=>dispatch(increment())}>inc</button>
        <button onClick={()=>dispatch(decrement())}>dec</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <button onClick={handleAdd}>Add</button>
        <button  onClick={handleSubtract}>Subtract</button>
    </center>
  )
}
export default ReduxCounter
