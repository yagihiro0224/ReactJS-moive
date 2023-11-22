import { useEffect, useState } from "react";
//const [,] = useState();
//useEffect(() => {}, []);
/*
    fetch(url)
      .then((response) => response.json())
      .then((json) => console.log(json));
*/
const url =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  console.log(movies);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default App;
