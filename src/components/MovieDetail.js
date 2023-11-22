import PropTypes from "prop-types";

function MovieDetail({ id, backImg, title, year, description_full, genres }) {
  return (
    <div>
      <img src={backImg} alt={title} />
      <h2>{`${title}(${year})`}</h2>
      <h5>{`${description_full}`}</h5>
      {genres.map((g) => (
        <li key={g}>{g}</li>
      ))}
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
