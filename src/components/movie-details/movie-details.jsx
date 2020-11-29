import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {runningFilmTime} from "../../utils";

const MovieDetails = (props) => {
  const {film} = props;

  return (
    <Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.cast.join(`\n`)}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{runningFilmTime(film.runningTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.releaseDate}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.object.isRequired,
};

export default MovieDetails;
