import PropTypes from "prop-types";

const propsForFilms = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  backgroundPoster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingAmount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  cast: PropTypes.string.isRequired,
  runningTime: PropTypes.string.isRequired,
  filmPreview: PropTypes.string.isRequired
});

export default propsForFilms;
