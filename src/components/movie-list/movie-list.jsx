import React, {Fragment} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {propsForFilms} from "../../types";

const MovieList = (props) => {
  const {films, onFilmCardClick, activeNumberOfFilms, onMouseEnter, onMouseLeave} = props;
  console.log(props);

  return (
    <Fragment>
      <div className="catalog__movies-list">
        {
          films.slice(0, activeNumberOfFilms).map((film, i) => (
            <SmallMovieCard
              key={`${i}-${film.title}`}
              film={film}
              onFilmCardClick={onFilmCardClick}
              isVideoPlaying={props.activeFilm === film.title}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            />
          ))}
      </div>
    </Fragment>
  );
};

MovieList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  activeNumberOfFilms: PropTypes.number,
  onMouseEnter: PropTypes.func.isRequired,
  activeFilm: PropTypes.string.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieList;
