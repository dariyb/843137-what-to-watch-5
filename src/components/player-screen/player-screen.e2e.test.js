import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerScreen from "./player-screen";
import {noop} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On exit should click`, () => {
  const onExitClick = jest.fn();

  const playerScreen = shallow(
      <PlayerScreen
        onExitClick={onExitClick}
        playFilm={true}
        progressFilm={2}
        timeLeft={45}
        onFullScreenClick={noop}
        onPauseClick={noop}
      />

  );

  const exitButton = playerScreen.find(`.player__exit`);
  exitButton.simulate(`click`);
  expect(onExitClick).toHaveBeenCalledTimes(1);
});

it(`On fullscreen should click`, () => {
  const onFullscreenClick = jest.fn();

  const playerScreen = shallow(
      <PlayerScreen
        onExitClick={noop}
        playFilm={true}
        progressFilm={2}
        timeLeft={45}
        onFullScreenClick={onFullscreenClick}
        onPauseClick={noop}
      />

  );

  const fullscreenButton = playerScreen.find(`.player__full-screen`);
  fullscreenButton.simulate(`click`);
  expect(onFullscreenClick).toHaveBeenCalledTimes(1);
});

it(`On play/pause should click`, () => {
  const onPlayNPausenClick = jest.fn();

  const playerScreen = shallow(
      <PlayerScreen
        onExitClick={noop}
        playFilm={true}
        progressFilm={2}
        timeLeft={45}
        onFullScreenClick={noop}
        onPauseClick={onPlayNPausenClick}
      />

  );

  const playNPauseButton = playerScreen.find(`.player__play`);
  playNPauseButton.simulate(`click`);
  expect(onPlayNPausenClick).toHaveBeenCalledTimes(1);
});
