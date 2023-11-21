import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  // setValue의 함수적 갱신. setValue의 prev는 예전값이 세팅 되어있다. 여기선 counter의 값일듯.
  // 예전 값인 prev의 값을 받아서 그 값에다가 1을 더해라는 의미.
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");

  // 이 함수는 처음에 딱 한번만 실행되고 useEffect 설정을 한 이유로 그 다음엔 실행을 안함.
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  // []안에 keyword를 집어넣기 때문에 keyword가 변경 될때만 실행된다.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {/* <Button text={"Continue"} /> */}
    </div>
  );
}

export default App;
