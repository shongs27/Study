function* sumGenerator() {
  console.log("시작~ 합니다~`");
  let a = yield;
  console.log("a값을 받았습니다");
  let b = yield;
  console.log("b값을 받았습니다");
  return a + b;
}

function* infiniteAddGenerator() {
  let result = 0;
  while (true) {
    result += yield result;
  }
}
