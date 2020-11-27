import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withButton from "./with-button";
import withMovieList from "../with-movie-list/with-movie-list";
import {films, noop} from "../../utils-test";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withButton(withMovieList(MockComponent));

it(`withButton is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      films={films}
      onFilmCardClick={noop}
      activeNumberOfFilms={8}
      onMouseEnter={noop}
      onMouseLeave={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
