import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";

const GenresList = (props) => {
  const {films, filterFilmsList} = props;
  const genres = [];

  const allGenres = (movies) => {
    for (let i = 0; i < movies.length; i++) {
      genres.push(movies[i].genre);
    }
    const uniqueGenres = new Set(genres);
    return [`All genres`, ...uniqueGenres].slice(0, 10);
  };

  return (
    <Fragment>
      <ul className="catalog__genres-list">
        {allGenres(films).map((genre, i) =>
          <li key={`${i}-${genre}`}
            className={`catalog__genres-item ${genre === props.isActive ? `catalog__genres-item--active` : ``}`}
          >
            <a href="#" className="catalog__genres-link"
              onClick={props.onClick}
            >{genre}</a>
          </li>
        )}
      </ul>
      {filterFilmsList(props.isActive, films)}
    </Fragment>
  );
};

GenresList.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  isActive: PropTypes.string.isRequired,
  filterFilmsList: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenresList;
