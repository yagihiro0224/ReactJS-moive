import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//const [,] = useState();
//useEffect(() => {}, []);
/*
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
    [then은 보통 안쓴다 아래와 같은 방식을 추천.]
    const getMovies = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
    단축 버전
    const getMovies = async () => {
    const json = await (await fetch(url)).json();
    map은 대상 변수 갯수 만큼 ()안 함수를 처리한 결과를 배열로 저장한다.
    [1,2,3].map(x => x*2) 
    x는 1,2,3을 하나하나 가져온 값. 거기에 2을 곱한 값을 map에 재 저장하는 거.
  };
*/
