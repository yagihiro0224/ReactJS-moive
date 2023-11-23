import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ id, backImg, title, year, description_full, genres }) {
  return (
    <div>
      <img src={backImg} alt={title} className={styles.movie__img} />
      <h2 className={styles.movie__title}>{`${title}(${year})`}</h2>
      <h5 className={styles.movie__year}>{`${description_full}`}</h5>
      <div className={styles.movie__year}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </div>
    </div>
  );
}

MovieDetail.prototypes = {
  id: PropTypes.number.isRequired,
  backImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description_full: PropTypes.string.description_full,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
