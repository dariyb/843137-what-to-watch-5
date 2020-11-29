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
      };

      this._onChangeRating = this._onChangeRating.bind(this);
      this._onChangeText = this._onChangeText.bind(this);
      this.showError = this.showError.bind(this);
    }

    showError() {
      this.setState({
        error: true,
      });
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
          {...this.props}
          onChangeRating={this._onChangeRating}
          onChangeText={this._onChangeText}
          currentRating={this.state.reviewRating}
          reviewTextValue={this.state.reviewText}
          activeState={this.state}
          filmId={id}
          error={this.state.error}
          errorFunc={this.showError}
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
