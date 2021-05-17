import React from "react";
import { increaseAsync, decreaseAsync } from "../modules/counter2";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const number = useSelector((state) => state.counter2);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <h1>Redux-saga</h1>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
