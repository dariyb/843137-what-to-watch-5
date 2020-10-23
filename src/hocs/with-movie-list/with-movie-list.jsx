import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const withMovieList = (Component) => {
  class WithMovieList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilm: ``,
      };

      this.onActiveMovie = this.onActiveMovie.bind(this);
      this.leaveActiveFilm = this.leaveActiveFilm.bind(this);

    }

    onActiveMovie(i) {
      const {films} = this.props;

      this.setState({activeFilm: films[i].title});
    }

    leaveActiveFilm() {
      this.setState({activeFilm: ``});
    }


    render() {
      return (
        <Component
          {...this.props}
          onMouseEnter={this.onActiveMovie}
          onMouseLeave={this.leaveActiveFilm}
          activeFilm={this.state.activeFilm}
        />
      );
    }
  }
  WithMovieList.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
  };

  return WithMovieList;
};

export default withMovieList;
