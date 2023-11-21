import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Bye :(");
  }

  function hiFn() {
    console.log("Hi :)");
    return byFn;
  }

  useEffect(hiFn, []);
  // useEffct의 Clean Up기능. return 하면 파괴될때 불려짐. 자주 쓰이진 않는듯.
  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destory :(");
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  // useEffect(() => {}, []);
  // useEffect(() => {
  //   console.log(showing);
  // }, [showing]);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
