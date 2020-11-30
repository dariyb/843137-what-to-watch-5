import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {propsForFilms} from "../../types";
import {TABS_FILM_SCREEN} from "../../utils";

const Tabs = (props) => {
  const {film, showActiveTab} = props;

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {TABS_FILM_SCREEN.map((tab, i) =>
            <li className={`movie-nav__item ${tab === props.isActive ? `movie-nav__item--active` : ``}`}
              key={`${i}-${tab}`}>
              <a href="#" className="movie-nav__link"
                onClick={props.onClick}
              >{tab}</a>
            </li>
          )}
        </ul>
      </nav>
      {showActiveTab(props.isActive, film)}
    </Fragment>
  );
};

Tabs.propTypes = {
  film: propsForFilms,
  isActive: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showActiveTab: PropTypes.func.isRequired,
};

export default Tabs;
