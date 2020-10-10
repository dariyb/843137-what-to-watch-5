import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/props-for-films";
import MovieList from "../movie-list/movie-list";

const MyListScreen = (props) => {
  const {films, onFilmCardClick, onLogoClick} = props;
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
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <MovieList films={films} onFilmCardClick={onFilmCardClick}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a onClick={onLogoClick} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MyListScreen.propTypes = {
  onFilmCardClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(propsForFilms).isRequired,
};

export default MyListScreen;