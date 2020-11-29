import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import Avatar from "../avatar/avatar";
import ReviewForm from "../review-form/review-form";
import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {getFilmForId} from "../../utils";

const ReviewFormWrapper = withReviewForm(ReviewForm);

const AddReviewScreen = (props) => {
  const {films, onLogoClick, onFilmTitleClick, onMyListClick} = props;

  const idFilm = props.match.params.id;
  const film = getFilmForId(idFilm, films);
  const {backgroundPoster, title, poster} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundPoster} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a onClick={onLogoClick} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a onClick={onFilmTitleClick} className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <Avatar onMyListClick={onMyListClick}/>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapper id={film.id}/>
      </div>

    </section>
  );
};

AddReviewScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onMyListClick: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

export default AddReviewScreen;
