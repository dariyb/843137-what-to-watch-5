import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        reviewRating: ``,
        reviewText: ``,
        error: false,
        enableForm: ``,
      };

      this._onChangeRating = this._onChangeRating.bind(this);
      this._onChangeText = this._onChangeText.bind(this);
      this.showError = this.showError.bind(this);
    }

    showError(error) {
      if (error === false) {
        this.setState({
          error: true,
          enableForm: ``,
        });
      }
      return this.state;
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
          onChangeRating={this._onChangeRating}
          onChangeText={this._onChangeText}
          currentRating={this.state.reviewRating}
          reviewTextValue={this.state.reviewText}
          activeState={this.state}
          filmId={id}
          error={this.state.error}
          errorFunc={this.showError}
          enableForm={this.state.enableForm}
        />
      );
    }
  }
  WithReviewForm.propTypes = {
    id: PropTypes.number.isRequired,
  };
  return WithReviewForm;
};

export default withReviewForm;
