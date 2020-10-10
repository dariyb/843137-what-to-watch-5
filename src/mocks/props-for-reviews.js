import PropTypes from "prop-types";

const propsForReviews = PropTypes.shape({
  film: PropTypes.string.isRequired,
  review: PropTypes.arrayOf(PropTypes.shape({
    reviewText: PropTypes.string.isRequired,
    reviewRating: PropTypes.number.isRequired,
    reviewAuthor: PropTypes.string.isRequired,
    reviewDate: PropTypes.string.isRequired,
  }))
});

export default propsForReviews;
