import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
// import {propsForFilms} from "../../types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        reviewRating: ``,
        reviewText: ``,
      };
      // this._onSubmitClick = this._onSubmitClick.bind(this);
      this._onChangeRating = this._onChangeRating.bind(this);
      this._onChangeText = this._onChangeText.bind(this);
    }

    _onChangeRating(evt) {
      this.setState({
        reviewRating: evt.target.value
      });
    }

    _onChangeText(evt) {
      this.setState({
        reviewText: evt.target.value
      });
    }

    render() {
      const {id} = this.props;

      return (
        <Component
          // onSubmitClick={this._onSubmitClick}
          onChangeRating={this._onChangeRating}
          onChangeText={this._onChangeText}
          currentRating={this.state.reviewRating}
          reviewTextValue={this.state.reviewText}
          activeState={this.state}
          filmId={id}
        />
      );
    }
  }
  WithReviewForm.propTypes = {
    // onSubmit: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };
  return WithReviewForm;
};

export default withReviewForm;
