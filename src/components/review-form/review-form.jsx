import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {publishReview} from "../../store/api-actions";

const RATINGS = [`1`, `2`, `3`, `4`, `5`];

const ReviewForm = (props) => {
  const {onChangeRating, onChangeText} = props;
  console.log(props);

  const onSubmitClick = (evt) => {
    evt.preventDefault();

    const {onSubmit} = props;

    onSubmit(props.filmId, props.activeState);

  };

  return (
    <form action="#" className="add-review__form"
      onSubmit={onSubmitClick}
    >
      <div className="rating">
        <div className="rating__stars">
          {RATINGS.map((rating, i) => (
            <React.Fragment key={i + rating}>
              <input className="rating__input" type="radio" name="rating"
                id={`star-${rating}`}
                value={rating}
                checked={props.currentRating === rating}
                onChange={(evt) => {
                  onChangeRating(evt);
                }}
              />
              <label className="rating__label"
                htmlFor={`star-${rating}`}>Rating {rating}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
          value={props.reviewTextValue}
          onChange={(evt) => {
            onChangeText(evt);
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentRating: PropTypes.string.isRequired,
  onChangeRating: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  reviewTextValue: PropTypes.string.isRequired,
  activeState: PropTypes.object.isRequired,
  filmId: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, authData) {
    debugger;
    dispatch(publishReview(id, authData));
  }
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
