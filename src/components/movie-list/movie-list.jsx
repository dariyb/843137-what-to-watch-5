import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMoreButton from "../show-more-button/show-more-button";
import {propsForFilms} from "../../types";
import {INITIAL_NUMBER_OF_FILMS} from "../../utils";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: ``,
      activeNumberOfFilms: INITIAL_NUMBER_OF_FILMS,
    };

    this.showMoreFilms = this.showMoreFilms.bind(this);
  }

  showMoreFilms() {
    this.setState({activeNumberOfFilms: this.state.activeNumberOfFilms + INITIAL_NUMBER_OF_FILMS});
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {activeFilm} = this.state;
    return (
      <Fragment>
        <div className="catalog__movies-list">
          {
            films.slice(0, this.state.activeNumberOfFilms).map((film, i) => (
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
        {this.state.activeNumberOfFilms < films.length &&
          <ShowMoreButton
            onClick={this.showMoreFilms}
          />}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MovieList;
