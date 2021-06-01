# Redux

redux 상태관리

## redux-logger / redux-extension

redux action 추적가능한 미들웨어 / 확장프로그램

## redux-thunk vs redux-saga

| redux-thunk | 
| :---------: | 
| 함수를 dispatch 가능 그 함수안에 여러가지 명령을 단순하게 할때 사용 |

| redux-saga |
| :--------: |
| redux-thunk이외에 복잡한 기능이 미리 구현되어있다|
| Generator 함수를 이용하여 함수의 흐름을 특정구간에 멈추었다가 다시 시작할 수 있다 |
|
- 액션을 모니터링하다 특정 액션이 발생할때 특정 작업을 할 수 있다.
- 다른 액션을 dispatch
- 현재 상태를 조회
- 비동기 작업을 진행할 때 기존 요청을 취소 할 수 있다
- 특정 액션이 발생했을 때 다른 액션을 디스패치하거나 자바스크립트 코드를 실행 할 수 있다
- 웹소켓의 경우 channel을 사용하여 효율적으로
  비동기 작업 실패했을때 재시도하는 기능을 구현 가능
|
