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

const propsForReviews = PropTypes.shape({
  film: PropTypes.string.isRequired,
  review: PropTypes.arrayOf(PropTypes.shape({
    reviewText: PropTypes.string.isRequired,
    reviewRating: PropTypes.number.isRequired,
    reviewAuthor: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired,
  }))
});

export {propsForFilms, propsForReviews};
