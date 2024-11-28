
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo, add } from "./ToDoSlice"; // Correct import
import UseTitle from "../../assets/UseTitle";

const TestingReduxThunk = () => {
  const [name, setName] = useState(""); // State to hold input value
  const dispatch = useDispatch();
  UseTitle("redux Thunk")
  const state = useSelector((state) => state.todoSlice);

  const handleAdd = () => {
    if (name.trim() !== "") {
      dispatch(add(name)); // Dispatch `add` with the input value
      setName(""); // Clear input after adding
    }
    
  };

  return (
    <div>
      {/* Render data */}
      {state.data && state.data.map((el, index) => <p key={index}>{el.title}</p>)}
      
      {/* Input and buttons */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter name"
      />
      <button onClick={() => dispatch(fetchTodo())}>Fetch Task</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TestingReduxThunk;
