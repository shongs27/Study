import React from "react";
import {
  Increase,
  Decrease,
  IncraseAsync,
  DecreaseAsync,
} from "../modules/counterThunk";

import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const number = useSelector((state) => state.counterThunk);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(IncraseAsync());
  };

  const onDecrease = () => {
    dispatch(DecreaseAsync());
  };

  return (
    <div>
      <h1>Redux-thunk</h1>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
