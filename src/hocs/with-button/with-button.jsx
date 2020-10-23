import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import ShowMoreButton from "../../components/show-more-button/show-more-button";
import {INITIAL_NUMBER_OF_FILMS} from "../../utils";
import {propsForFilms} from "../../types";

const withButton = (Component) => {
  class WithButton extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeNumberOfFilms: INITIAL_NUMBER_OF_FILMS,
      };

      this.showMoreFilms = this.showMoreFilms.bind(this);
    }

    showMoreFilms() {
      this.setState({activeNumberOfFilms: this.state.activeNumberOfFilms + INITIAL_NUMBER_OF_FILMS});
    }

    render() {
      return (
        <>
        <Component
          {...this.props}
          activeNumberOfFilms={this.state.activeNumberOfFilms}
        />
        {this.state.activeNumberOfFilms < this.props.films.length &&
          <ShowMoreButton
            onClick={this.showMoreFilms}
          />}
          </>
      );
    }
  }
  WithButton.propTypes = {
    films: PropTypes.arrayOf(propsForFilms).isRequired,
  };

  return WithButton;
};

export default withButton;
