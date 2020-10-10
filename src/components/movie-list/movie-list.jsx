import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import propsForFilms from "../../mocks/props-for-films";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: ``
    };
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <SmallMovieCard key={`${i}-${film.title}`} film={film} onFilmCardClick={onFilmCardClick} onMouseEnter={() => {
            this.setState({activeFilm: film.title});
          }}/>
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
