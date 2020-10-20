import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import ShowMoreButton from "../show-more-button/show-more-button";
import {propsForFilms} from "../../types";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: ``,
      activeNumberOfFilms: 8,
    };

    this.showMoreFilms = this.showMoreFilms.bind(this);
  }

  showMoreFilms() {
    this.setState({activeNumberOfFilms: this.state.activeNumberOfFilms + 8});
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    const {activeFilm} = this.state;
    debugger;
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
  // showMoreFilms: PropTypes.func.isRequired,
};

export default MovieList;
