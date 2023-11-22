import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const url =
  "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(url)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
            {movies.map((movie) => (
            /* 얘는 movies가 배열이라 map 함수를 썼을때 */
            <Movie
              /* [중요] key는 reactJS에서 map안에 component들을 
              render할 때 사용하므로 설정해야함. */
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
