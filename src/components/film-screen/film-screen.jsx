import React from "react";
import PropTypes from "prop-types";
import {propsForFilms, propsForReviews} from "../../types";
import Avatar from "../avatar/avatar";
import MovieList from "../movie-list/movie-list";
import FooterScreen from "../footer-screen/footer-screen";
import withActiveTab from "../../hocs/with-tabs/with-tabs";
import Tabs from "../tabs/tabs";
import MovieOverview from "../movie-overview/movie-overview";
import MovieDetails from "../movie-details/movie-details";
import MoviewReviews from "../movie-reviews/movie-reviews";
import {Link} from 'react-router-dom';
import {TABS, tabsFilmScreen, getFilmForId} from "../../utils";
import withMovieList from "../../hocs/with-movie-list/with-movie-list";
import {fetchFilmComments} from "../../store/api-actions";
import {connect} from 'react-redux';
import {getAuthStatus} from "../../store/reducers/root-reducer";
import {addPromoToFavorite} from "../../store/api-actions";

const MovieListMyListWrapper = withMovieList(MovieList);

const TabsWrapper = withActiveTab(Tabs);

const SIMILAR_FILMS = 4;

const FilmScreen = (props) => {
  const {films, onFilmCardClick, onLogoClick, onAddReviewClick, onPlayClick, onMyListClick, isAuthorised, reviews, onLoad, onFavClick} = props;

  const idFilm = props.match.params.id;
  const film = getFilmForId(idFilm, films);
  const {backgroundPoster, title, genre, releaseDate, poster} = film;

  React.useEffect(() => {
    onLoad(film.id);
  }, [film.id]);

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
            <img src={backgroundPoster} alt={title} />
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
              {
                isAuthorised ?
                  <Avatar onMyListClick={onMyListClick}/>
                  :
                  <Link to='/login' className="user-block__link">Sign in</Link>
              }
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={() => onPlayClick(film.id)}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={() => {
                    onFavClick(film.id, film.isFavorite);
                    onMyListClick();
                  }}>
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  isAuthorised ?
                    <a onClick={() => onAddReviewClick(film.id)} className="btn movie-card__button">Add review</a>
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
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsWrapper
                film={film}
                variantTabs={tabsFilmScreen}
                showActiveTab = {(activeNavTab, movie) => {
                  switch (activeNavTab) {
                    case TABS.OVERVIEW:
                      return <MovieOverview film={movie}/>;
                    case TABS.DETAILS:
                      return <MovieDetails film={movie}/>;
                    case TABS.REVIEWS:
                      return <MoviewReviews film={movie} reviews={reviews}/>;
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
            onFilmCardClick={onFilmCardClick}
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
  onFavClick: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(propsForReviews),
  onLoad: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

const mapStatetoProps = (state) => ({
  isAuthorised: getAuthStatus(state),
  reviews: state.DATA.comments,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad(authData) {
    dispatch(fetchFilmComments(authData));
  },
  onFavClick(authData, favBool) {
    dispatch(addPromoToFavorite(authData, favBool));
  }
});

export {FilmScreen};

export default connect(mapStatetoProps, mapDispatchToProps)(FilmScreen);
