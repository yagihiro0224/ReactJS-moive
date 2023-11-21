import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  // setValue의 함수적 갱신. setValue의 prev는 예전값이 세팅 되어있다. 여기선 counter의 값일듯.
  // 예전 값인 prev의 값을 받아서 그 값에다가 1을 더해라는 의미.
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time.");

  // 이 함수는 처음에 딱 한번만 실행되고 useEffect 설정을 한 이유로 그 다음엔 실행을 안함.
  const iRunOnlyOnce = () => console.log("I run only once.");
  useEffect(iRunOnlyOnce, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
