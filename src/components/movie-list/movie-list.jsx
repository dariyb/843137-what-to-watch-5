import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import {propsForFilms} from "../../types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: ``
    };
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {activeFilm} = this.state;
    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <SmallMovieCard
            key={`${i}-${film.title}`}
            film={film}
            onFilmCardClick={onFilmCardClick}
            isVideoPlaying={activeFilm === film.title}
            onMouseEnter={() => {
              this.setState({activeFilm: film.title});
            }}
            onMouseLeave={() => {
              this.setState({activeFilm: ``});
            }}
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MovieList;
