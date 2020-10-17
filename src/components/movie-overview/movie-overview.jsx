import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const RatingScore = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

const MovieOverview = (props) => {
  const {films} = props;

  const getTextScore = (ratingScore) => {
    let textScore = null;
    switch (true) {
      case ratingScore >= RatingScore.BAD && ratingScore < RatingScore.NORMAL:
        textScore = `Bad`;
        break;
      case ratingScore >= RatingScore.NORMAL && ratingScore < RatingScore.GOOD:
        textScore = `Normal`;
        break;
      case ratingScore >= RatingScore.GOOD && ratingScore < RatingScore.VERY_GOOD:
        textScore = `Good`;
        break;
      case ratingScore >= RatingScore.VERY_GOOD && ratingScore < RatingScore.AWESOME:
        textScore = `Very Good`;
        break;
      case ratingScore === RatingScore.AWESOME:
        textScore = `Awesome`;
        break;
    }
    return textScore;
  };

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{films[0].rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextScore(films[0].rating.toFixed())}</span>
          <span className="movie-rating__count">{films[0].ratingAmount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {films[0].description}

        <p className="movie-card__director"><strong>Director:{films[0].director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {films[0].cast} and other</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MovieOverview;
