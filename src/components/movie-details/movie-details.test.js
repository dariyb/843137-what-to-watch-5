import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
import {film} from "../../utils-test";

it(`Render MovieDetails`, () => {
  const tree = renderer
  .create(
      <MovieDetails
        film={film}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
