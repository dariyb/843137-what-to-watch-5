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
        disableForm: ``,
      };
      this._onChangeRating = this._onChangeRating.bind(this);
      this._onChangeText = this._onChangeText.bind(this);
      this.showError = this.showError.bind(this);
      this.disableForm = this.disableForm.bind(this);
    }

    showError(error) {
      // for (let element of document.querySelector(`.add-review__form`).elements) {
      //   element.removeAttribute(`disabled`, `disabled`);
      // }
      if (error === false) {
        this.setState({
          error: true,
          disableForm: ``,
        });
      }
    }

    disableForm() {
      this.setState({
        disableForm: `disabled`,
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
          onChangeRating={this._onChangeRating}
          onChangeText={this._onChangeText}
          currentRating={this.state.reviewRating}
          reviewTextValue={this.state.reviewText}
          activeState={this.state}
          filmId={id}
          error={this.state.error}
          errorFunc={this.showError}
          disableFormFunc={this.disableForm}
          disableForm={this.state.disableForm}
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
