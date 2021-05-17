///////////// Redux-thunk //////////
////////////////////////////////////
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//action creator
export const Increase = () => ({ type: INCREASE });
export const Decrease = () => ({ type: DECREASE });

//action creator에
// (dispatch, getState) 라는 thunk 함수가 포함
// thunk creator
export const IncraseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(Increase());
  }, 1000);
};

export const DecreaseAsync = () => (dispatch, getState) => {
  setTimeout(() => {
    dispatch(Decrease());
  }, 1000);
};

const init = 0;

export default function counter(state = init, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
