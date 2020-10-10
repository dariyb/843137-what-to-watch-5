import React from "react";
import PropTypes from "prop-types";
import propsForFilms from "../../mocks/props-for-films";
import MovieList from "../movie-list/movie-list";

const RatingScore = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

const FilmScreen = (props) => {
  const {films, onFilmCardClick, onLogoClick, onAddReviewClick, onPlayClick, onMyListClick} = props;
  const getTextScore = (ratingScore) => {
    let textScore = null;
    switch (true) {
      case ratingScore >= RatingScore.BAD && ratingScore < RatingScore.NORMAL:
        textScore = `Bad`;
        break;
      case ratingScore >= RatingScore.NORMAL && ratingScore < RatingScore.GOOD:
        textScore = `Normal`;
        break;
      case ratingScore >= RatingScore.GOOD && ratingScore < RatingScore.VERY_GOOD:
        textScore = `Good`;
        break;
      case ratingScore >= RatingScore.VERY_GOOD && ratingScore < RatingScore.AWESOME:
        textScore = `Very Good`;
        break;
      case ratingScore === RatingScore.AWESOME:
        textScore = `Awesome`;
        break;
    }
    return textScore;
  };
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={films[0].backgroundPoster} alt={films[0].title} />
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
                <a onClick={onAddReviewClick} className="btn movie-card__button">Add review</a>
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
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li className="movie-nav__item movie-nav__item--active">
                    <a href="#" className="movie-nav__link">Overview</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Details</a>
                  </li>
                  <li className="movie-nav__item">
                    <a href="#" className="movie-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="movie-rating">
                <div className="movie-rating__score">{films[0].rating}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{getTextScore(films[0].rating.toFixed())}</span>
                  <span className="movie-rating__count">{films[0].ratingAmount} ratings</span>
                </p>
              </div>

              <div className="movie-card__text">
                {films[0].description}

                <p className="movie-card__director"><strong>Director:{films[0].director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {films[0].cast} and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

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

FilmScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onAddReviewClick: PropTypes.func.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
};

export default FilmScreen;