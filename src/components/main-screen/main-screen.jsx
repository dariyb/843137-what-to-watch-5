import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import MovieList from "../movie-list/movie-list";
import FooterScreen from "../footer-screen/footer-screen";
import withActiveTab from "../../hocs/with-tabs/with-tabs";
import GenresList from "../genres-list/genres-list";
import {tabsFilmGenres, getFilmsByGenre} from "../../utils";
import withButton from "../../hocs/with-button/with-button";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";

const GenresListWrapper = withActiveTab(GenresList);
const MovieListWarpper = withButton(withMovieList(MovieList));

const MainScreen = (props) => {
  const {films, onFilmCardClick, onMyListClick, onPlayClick, onLogoClick} = props;

  return (
    <React.Fragment>
      {films.length === 0 ? <p>LOADING...</p> :
        <React.Fragment>
          <section className="movie-card">
            <div className="movie-card__bg">
              <img src={films[0].backgroundPoster} alt={films[0].title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <a className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__info">
                <div className="movie-card__poster">
                  <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
                </div>

                <div className="movie-card__desc">
                  <h2 className="movie-card__title">{films[0].title}</h2>
                  <p className="movie-card__meta">
                    <span className="movie-card__genre">{films[0].genre}</span>
                    <span className="movie-card__year">{films[0].releaseDate}</span>
                  </p>

                  <div className="movie-card__buttons">
                    <button className="btn btn--play movie-card__button" type="button" onClick={onPlayClick}>
                      <svg viewBox="0 0 19 19" width="19" height="19">
                        <use xlinkHref="#play-s"></use>
                      </svg>
                      <span>Play</span>
                    </button>
                    <button className="btn btn--list movie-card__button" type="button" onClick={onMyListClick}>
                      <svg viewBox="0 0 19 20" width="19" height="20">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="page-content">
            <section className="catalog">
              <h2 className="catalog__title visually-hidden">Catalog</h2>

              <GenresListWrapper
                films={films}
                variantTabs={tabsFilmGenres}
                filterFilmsList={(activeFilter, movies) => {
                  const accurateFilms = getFilmsByGenre(movies, activeFilter);
                  return <MovieListWarpper
                    films={accurateFilms}
                    onFilmCardClick={onFilmCardClick}
                  />;
                }}
              />

            </section>

            <FooterScreen onLogoClick={onLogoClick}/>
          </div>
        </React.Fragment>
      }
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired
};


export default MainScreen;
