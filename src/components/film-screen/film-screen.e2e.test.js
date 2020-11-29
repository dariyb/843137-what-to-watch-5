import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmScreen} from "./film-screen";
import {films, noop, noopWithId, match} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On logo in filmScreen should click`, () => {
  const onLogoButtonClick = jest.fn();

  const filmScreen = shallow(
      <FilmScreen
        films={films}
        onFilmCardClick={noopWithId}
        onLogoClick={onLogoButtonClick}
        onAddReviewClick={noopWithId}
        onMyListClick={noop}
        onPlayClick={noopWithId}
        onLoad={noop}
        onFavClick={noopWithId}
        isAuthorised={true}
        match={match}
      />

  );

  const logoLink = filmScreen.find(`.logo__link`);
  logoLink.simulate(`click`);
  expect(onLogoButtonClick).toHaveBeenCalledTimes(1);
});

it(`On play in film screen should click`, () => {
  const onPlayClick = jest.fn();

  const filmScreen = shallow(
      <FilmScreen
        films={films}
        onFilmCardClick={noopWithId}
        onLogoClick={noop}
        onAddReviewClick={noopWithId}
        onMyListClick={noop}
        onPlayClick={onPlayClick}
        onLoad={noop}
        onFavClick={noopWithId}
        isAuthorised={true}
        match={match}
      />

  );

  const playButton = filmScreen.find(`.btn.btn--play.movie-card__button`);
  playButton.simulate(`click`);
  expect(onPlayClick).toHaveBeenCalledTimes(1);
});

it(`On my-list in film screen should click`, () => {
  const onMylistClick = jest.fn();

  const filmScreen = shallow(
      <FilmScreen
        films={films}
        onFilmCardClick={noopWithId}
        onLogoClick={noop}
        onAddReviewClick={noopWithId}
        onMyListClick={onMylistClick}
        onPlayClick={noopWithId}
        onLoad={noop}
        onFavClick={onMylistClick}
        isAuthorised={true}
        match={match}
      />

  );

  const mylistButton = filmScreen.find(`.btn.btn--list.movie-card__button`);
  mylistButton.simulate(`click`);
  expect(onMylistClick).toHaveBeenCalledTimes(2);
});

it(`On add-review in film screen should click`, () => {
  const onAddReviewClick = jest.fn();

  const filmScreen = shallow(
      <FilmScreen
        films={films}
        onFilmCardClick={noopWithId}
        onLogoClick={noop}
        onAddReviewClick={onAddReviewClick}
        onMyListClick={noop}
        onPlayClick={noopWithId}
        onLoad={noop}
        onFavClick={noopWithId}
        isAuthorised={true}
        match={match}
      />

  );

  const addReviewButton = filmScreen.find(`.movie-card__button`).at(2);
  addReviewButton.simulate(`click`);
  expect(onAddReviewClick).toHaveBeenCalledTimes(1);
});
