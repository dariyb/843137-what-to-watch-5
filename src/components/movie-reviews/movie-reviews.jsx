import React, {Fragment} from "react";
import PropTypes from "prop-types";
import moment from "moment";

const convertDate = (date) => {
  return moment(date).format(`MMMM, DD YYYY`);
};

const MoviewReviews = (props) => {
  const {reviews} = props;

  const evenReviews = reviews.filter((item, i) => i % 2 === 0);
  const unevenReviews = reviews.filter((item, i) => i % 2 !== 0);

  const createReview = (review, i) => {
    return (
      <div className="review" key={i + 1}>
        <blockquote className="review__quote">
          <p className="review__text">{review.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{review.user.name}</cite>
            <time className="review__date" dateTime="2016-12-24">{convertDate(review.date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.rating.toFixed(1)}</div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {evenReviews.map((review, i) => createReview(review, i))}
        </div>
        <div className="movie-card__reviews-col">
          {unevenReviews.map((review, i) => createReview(review, i))}
        </div>
      </div>
    </Fragment>
  );
};

MoviewReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default MoviewReviews;
