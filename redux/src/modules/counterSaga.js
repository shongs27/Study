///////////// Redux-saga //////////
////////////////////////////////////

//redux-saga의 명령어 effects
import {
  delay,
  put,
  call,
  fork,
  takeEvery,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
//delay는 기다려라, put는 dispatch하라, call은 동기호출, fork는 비동기호출

//액션 타입
const INCREASE2 = "INCREASE2";
const DECREASE2 = "DECREASE2";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

//액션 생성 함수
export const increase2 = () => ({ type: INCREASE2 });
export const decrease2 = () => ({ type: DECREASE2 });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

//generator함수는 saga
function* increaseSaga() {
  yield delay(1000);
  const result = yield put(increase2());
  console.log(result);
  // yield put(increase2());
}
function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease2());
}
//root saga를 위해 내보내준다
export function* eventSaga() {
  //dispatch 들어오면 다 실행한다 / while(true) {} 문과 비슷
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  //마지막 요청만 실행, 기존꺼 취소 하고 실행
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const init = 0;

export default function counterSaga(state = init, action) {
  switch (action.type) {
    case INCREASE2:
      return state + 1;
    case DECREASE2:
      return state - 1;
    default:
      return state;
  }
}
