import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import VideoPlayer from "../video-player/video-player";

const SmallMovieCard = (props) => {
  const {film, onFilmCardClick, onMouseEnter, onMouseLeave, isVideoPlaying} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onMouseOver = {(evt) => {
          evt.preventDefault();
          onMouseEnter(film.title);
        }}
        onMouseOut = {(evt) => {
          evt.preventDefault();
          onMouseLeave();
        }}
        onClick={onFilmCardClick}
      >
        {isVideoPlaying ?
          <VideoPlayer
            preview={film.preview}
            filmPreview={film.filmPreview}
          />
          :
          <img src={film.preview} alt={film.title} width="280" height="175" />
        }
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  film: propsForFilms
};

export default SmallMovieCard;
