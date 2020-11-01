import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import reviews from "../../mocks/films";

const MoviewReviews = () => {
  // const {films} = props;
  // временное действие,пока не буду получать отзывы с сервера

  const evenReviews = reviews[0].review.filter((item, i) => i % 2 === 0);
  const unevenReviews = reviews[0].review.filter((item, i) => i % 2 !== 0);

  const createReview = (review, i) => {
    return (
      <div className="review" key={i + 1}>
        <blockquote className="review__quote">
          <p className="review__text">{review.reviewText}</p>

          <footer className="review__details">
            <cite className="review__author">{review.reviewAuthor}</cite>
            <time className="review__date" dateTime="2016-12-24">{review.reviewDate}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{review.reviewRating.toFixed(1)}</div>
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
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MoviewReviews;
