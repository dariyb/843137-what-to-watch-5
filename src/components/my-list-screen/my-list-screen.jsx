import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import Avatar from "../avatar/avatar";
import MovieList from "../movie-list/movie-list";
import FooterScreen from "../footer-screen/footer-screen";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";
import {returnFavFilms} from "../../utils";

const MovieListMyListWrapper = withMovieList(MovieList);

const MyListScreen = (props) => {
  const {films, onFilmCardClick, onLogoClick, onMyListClick} = props;

  const favFilms = returnFavFilms(films);


  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a onClick={onLogoClick} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <Avatar onMyListClick={onMyListClick}/>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MovieListMyListWrapper
            films={favFilms}
            onFilmCardClick={onFilmCardClick}/>
        </section>

        <FooterScreen onLogoClick={onLogoClick}/>
      </div>
    </React.Fragment>
  );
};

MyListScreen.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onMyListClick: PropTypes.func.isRequired,

};

export default MyListScreen;
