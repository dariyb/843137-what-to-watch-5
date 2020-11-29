import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {films, noop} from "../../utils-test";

it(`Render GenresList`, () => {
  const tree = renderer
  .create(
      <GenresList
        films={films}
        filterFilmsList={noop}
        onClick={noop}
        isActive={`All genres`}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
