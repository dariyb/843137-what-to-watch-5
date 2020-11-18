import React, {Fragment} from "react";
import PropTypes from "prop-types";
// import {propsForFilms} from "../../types";
import {getTextScore} from "../../utils";

const MovieOverview = (props) => {
  const {film} = props;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getTextScore(film.rating.toFixed())}</span>
          <span className="movie-rating__count">{film.ratingAmount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.description}

        <p className="movie-card__director"><strong>Director:{film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.cast.toString()} and other</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  film: PropTypes.object.isRequired,
};

export default MovieOverview;
