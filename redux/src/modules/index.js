import { combineReducers } from "redux";
import posts from "./posts";
import counterThunk from "./counterThunk";
import counterSaga, { eventSaga } from "./counterSaga";
import { all } from "redux-saga/effects";

//root reducer
const rootReducer = combineReducers({ counterThunk, counterSaga, posts });

//root saga
export function* rootSaga() {
  yield all([eventSaga()]);
}

export default rootReducer;
