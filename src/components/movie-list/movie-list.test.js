import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./movie-list";
import {films, noop} from "../../utils-test";

it(`Render MovieList`, () => {
  const tree = renderer
  .create(
      <MovieList
        films={films}
        onFilmCardClick={noop}
        activeNumberOfFilms={8}
        onMouseEnter={noop}
        onMouseLeave={noop}
        activeFilm={`Bronson`}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
