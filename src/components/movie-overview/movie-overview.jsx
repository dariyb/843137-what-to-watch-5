import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import {getTextScore} from "../../utils";

const MovieOverview = (props) => {
  const {films} = props;

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

        <p className="movie-card__starring"><strong>Starring: {films[0].cast.toString()} and other</strong></p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MovieOverview;
