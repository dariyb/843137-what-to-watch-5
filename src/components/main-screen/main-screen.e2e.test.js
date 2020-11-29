import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainScreen} from "./main-screen";
import {films, film, noop, noopWithId} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On play in main-screen should click`, () => {
  const onPlayClick = jest.fn();

  const mainScreen = shallow(
      <MainScreen
        films={films}
        film={film}
        onFilmCardClick={noopWithId}
        onMyListClick={noop}
        onPlayClick={onPlayClick}
        onLogoClick={noop}
        isAuthorised={true}
        onFavClick={noopWithId}
      />

  );

  const playButton = mainScreen.find(`.btn--play`);
  playButton.simulate(`click`);
  expect(onPlayClick).toHaveBeenCalledTimes(1);
});

it(`On my-list in main-screen should click`, () => {
  const onListClick = jest.fn();

  const mainScreen = shallow(
      <MainScreen
        films={films}
        film={film}
        onFilmCardClick={noopWithId}
        onMyListClick={onListClick}
        onPlayClick={noopWithId}
        onLogoClick={noop}
        isAuthorised={true}
        onFavClick={onListClick}
      />

  );

  const listButton = mainScreen.find(`.btn--list`);
  listButton.simulate(`click`);
  expect(onListClick).toHaveBeenCalledTimes(2);
});
