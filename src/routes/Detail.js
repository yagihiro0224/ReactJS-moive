import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

const url = "https://yts.mx/api/v2/movie_details.json?movie_id=";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (await fetch(`${url}${id}`)).json();
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div>
          <MovieDetail
            /* 얘는 MoviesDetail가 단일 데이터 이기 땜에 map안써도됨. */
            key={movieDetail.id}
            id={movieDetail.id}
            backImg={movieDetail.background_image_original}
            title={movieDetail.title}
            year={movieDetail.year}
            description_full={movieDetail.description_full}
            genres={movieDetail.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
