import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const MovieDetails = (props) => {
  const {films} = props;

  return (
    <Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{films[0].director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {films[0].cast.split(`\n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{films[0].runningTime}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{films[0].genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{films[0].releaseDate}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MovieDetails;
