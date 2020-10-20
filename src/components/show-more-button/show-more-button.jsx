import React from "react";
// import PropTypes from "prop-types";
// import {propsForFilms} from "../../types";

const ShowMoreButton = () => {

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
      >Show more</button>
    </div>
  );
};

// ShowMoreButton.propTypes = {
// films: PropTypes.arrayOf(propsForFilms).isRequired,
// showMoreFilms: PropTypes.func.isRequired,
// numberOfShownCards: PropTypes.number.isRequired
// };

export default ShowMoreButton;
