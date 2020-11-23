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
  cast: PropTypes.array.isRequired,
  runningTime: PropTypes.number.isRequired,
  filmPreview: PropTypes.string.isRequired
});

const propsForReviews = PropTypes.shape({
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })
});

export {propsForFilms, propsForReviews};
