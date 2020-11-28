import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import {film, noop, noopWithId} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On mouseenter card`, () => {
  const onMouseOverCard = jest.fn();

  const movieCardScreen = shallow(
      <SmallMovieCard
        film={film}
        onFilmCardClick={noopWithId}
        onMouseEnter={onMouseOverCard}
        onMouseLeave={noop}
        isVideoPlaying={true}
        filmPreview={film.filmPreview}
      />

  );

  const cardBlock = movieCardScreen.find(`.small-movie-card__image`);
  cardBlock.simulate(`mouseover`, {preventDefault() {}});
  expect(onMouseOverCard).toHaveBeenCalledTimes(1);
});

it(`On mouseleave card`, () => {
  const onMouseLeaveCard = jest.fn();

  const movieCardScreen = shallow(
      <SmallMovieCard
        film={film}
        onFilmCardClick={noopWithId}
        onMouseEnter={noop}
        onMouseLeave={onMouseLeaveCard}
        isVideoPlaying={true}
        filmPreview={film.filmPreview}
      />

  );

  const cardBlock = movieCardScreen.find(`.small-movie-card__image`);
  cardBlock.simulate(`mouseout`, {preventDefault() {}});
  expect(onMouseLeaveCard).toHaveBeenCalledTimes(1);
});

it(`On film card click`, () => {
  const onFilmCardClick = jest.fn();

  const movieCardScreen = shallow(
      <SmallMovieCard
        film={film}
        onFilmCardClick={onFilmCardClick}
        onMouseEnter={noop}
        onMouseLeave={noop}
        isVideoPlaying={true}
        filmPreview={film.filmPreview}
      />

  );

  const cardBlockClick = movieCardScreen.find(`.small-movie-card__image`);
  cardBlockClick.simulate(`click`);
  expect(onFilmCardClick).toHaveBeenCalledTimes(1);
});
