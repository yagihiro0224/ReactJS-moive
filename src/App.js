import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  // setValue의 함수적 갱신. setValue의 prev는 예전값이 세팅 되어있다. 여기선 counter의 값일듯.
  // 예전 값인 prev의 값을 받아서 그 값에다가 1을 더해라는 의미.
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
