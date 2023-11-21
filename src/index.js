import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // creat-react-app로 설치했을때 기본적으로 생성되는 테그임. 이게 써있으면 렌더링이 두번 됨.
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
