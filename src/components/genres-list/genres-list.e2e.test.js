import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list";
import {films, noop} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On genre in genres-list should click`, () => {
  const onGenreClick = jest.fn();

  const genresListScreen = shallow(
      <GenresList
        films={films}
        filterFilmsList={noop}
        onClick={onGenreClick}
        isActive={`All genres`}
      />

  );

  const genreLink = genresListScreen.find(`.catalog__genres-link`).at(1);
  genreLink.simulate(`click`);
  expect(onGenreClick).toHaveBeenCalledTimes(1);
});
