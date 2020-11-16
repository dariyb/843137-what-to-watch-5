import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import MovieList from "../movie-list/movie-list";
import FooterScreen from "../footer-screen/footer-screen";
import withActiveTab from "../../hocs/with-tabs/with-tabs";
import Tabs from "../tabs/tabs";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MoviewReviews from "../movie-reviews/movie-reviews";
import {TABS, tabsFilmScreen} from "../../utils";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthStatus} from "../../store/reducers/root-reducer";

const MovieListMyListWrapper = withMovieList(MovieList);

const TabsWrapper = withActiveTab(Tabs);

const SIMILAR_FILMS = 4;

const FilmScreen = (props) => {
  const {films, onFilmCardClick, onLogoClick, onAddReviewClick, onPlayClick, onMyListClick, isAuthorised} = props;

  console.log(props);
  const idFilm = props.match.params.id;
  // console.log(idFilm);
  const {backgroundPoster, id} = films[idFilm];
  console.log(films[idFilm].id);

  const getMoreLikeThis = (movies, currentFilm) => {
    const similarMovies = movies.filter((movie) => movie.genre === currentFilm.genre);

    if (similarMovies.length === 0) {
      return movies.slice(0, SIMILAR_FILMS);
    }
    if (similarMovies.length > SIMILAR_FILMS) {
      return similarMovies.slice(0, SIMILAR_FILMS);
    }
    return similarMovies;
  };

  const similarGenreFilms = getMoreLikeThis(films, films[0]);
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundPoster} alt={films[0].title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a onClick={onLogoClick} className="logo__link">
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
                {
                  isAuthorised ?
                    <a onClick={onAddReviewClick} className="btn movie-card__button">Add review</a>
                    :
                    ``
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapper
                films={films}
                variantTabs={tabsFilmScreen}
                showActiveTab = {(activeNavTab, movies) => {
                  switch (activeNavTab) {
                    case TABS.OVERVIEW:
                      return <MovieOverview films={movies}/>;
                    case TABS.DETAILS:
                      return <MovieDetails films={movies}/>;
                    case TABS.REVIEWS:
                      return <MoviewReviews films={movies}/>;
                  }
                  return null;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieListMyListWrapper
            films={similarGenreFilms}
            onFilmCardClick={onFilmCardClick(id)}
          />
        </section>

        <FooterScreen onLogoClick={onLogoClick}/>
      </div>
    </React.Fragment>
  );
};

FilmScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onAddReviewClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  isAuthorised: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

const mapStatetoProps = (state) => ({
  isAuthorised: getAuthStatus(state),
});

export {FilmScreen};

export default connect(mapStatetoProps)(FilmScreen);

// export default FilmScreen;
