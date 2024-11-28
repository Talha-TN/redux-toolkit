import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./ToDoSlice";
const TestingReduxThunk = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoSlice);

  return (
    <div>
      {state.data &&
        state.data.map((el, index) => <p key={index}>{el.title}</p>)}
      <button onClick={(e) => dispatch(fetchTodo())}>fetch task</button>
    </div>
  );
};

export default TestingReduxThunk;
