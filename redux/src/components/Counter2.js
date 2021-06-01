import React from "react";
import { increaseAsync, decreaseAsync } from "../modules/counterSaga";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const number2 = useSelector((state) => state.counterSaga);
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
      <h1>{number2}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
