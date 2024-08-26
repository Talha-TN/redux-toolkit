import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/slices/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Select the counter value from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function to dispatch actions
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())} style={{ margin: "5px" }}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} style={{ margin: "5px" }}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
