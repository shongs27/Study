import { combineReducers } from "redux";
import posts from "./posts";
import counter from "./counter";
import counter2, { counterSaga } from "./counter2";
import { all } from "redux-saga/effects";

//root reducer
const rootReducer = combineReducers({ counter, counter2, posts });

//root saga
export function* rootSaga() {
  yield all([counterSaga()]);
}

export default rootReducer;
