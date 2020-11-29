import React, {Fragment} from "react";
import PropTypes from "prop-types";

const tabs = [`Overview`, `Details`, `Reviews`];

const Tabs = (props) => {
  const {film, showActiveTab} = props;

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) =>
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
  film: PropTypes.object.isRequired,
  isActive: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showActiveTab: PropTypes.func.isRequired,
};

export default Tabs;
