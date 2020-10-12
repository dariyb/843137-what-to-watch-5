import React, {PureComponent} from "react";

const RATINGS = [`1`, `2`, `3`, `4`, `5`];

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reviewRating: `3`,
      reviewText: ``,
    };
  }

  _onSubmitClick(evt) {
    evt.preventDefault();
  }

  render() {
    const currentRating = this.state.reviewRating;
    return (
      <form action="#" className="add-review__form"
        onSubmit={this._onSubmitClick}
      >
        <div className="rating">
          <div className="rating__stars">
            {RATINGS.map((rating, i) => (
              <React.Fragment key={i + rating}>
                <input className="rating__input" type="radio" name="rating"
                  id={`star-${rating}`}
                  value={rating}
                  checked={currentRating === rating}
                  onChange={(evt) => {
                    this.setState({
                      reviewRating: evt.target.value
                    });
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
            value={this.state.reviewText}
            onChange={(evt) => {
              this.setState({
                reviewText: evt.target.value
              });
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    );
  }
}

export default ReviewForm;
