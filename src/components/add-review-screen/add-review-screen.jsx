import React from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import ReviewForm from "../review-form/review-form";
import withReviewForm from "../../hocs/with-review-form/with-review-form";

const ReviewFormWrapper = withReviewForm(ReviewForm);

const AddReviewScreen = (props) => {
  const {films, onLogoClick, onFilmTitleClick} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={films[0].backgroundPoster} alt={films[0].title} />
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
                <a onClick={onFilmTitleClick} className="breadcrumbs__link">{films[0].title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={films[0].poster} alt={films[0].title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <ReviewFormWrapper />
      </div>

    </section>
  );
};

AddReviewScreen.propTypes = {
  films: PropTypes.arrayOf(propsForFilms).isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default AddReviewScreen;
