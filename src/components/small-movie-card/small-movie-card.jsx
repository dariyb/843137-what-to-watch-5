import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const SmallMovieCard = (props) => {
  const {film, onFilmCardClick, onMouseEnter} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image"
        onMouseOver = {(evt) => {
          evt.preventDefault();
          onMouseEnter(film.title);
        }}
        onClick={onFilmCardClick}
      >
        <img src={film.preview} alt={film.title} width="280" height="175" />
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
  film: propsForFilms
};

export default SmallMovieCard;
