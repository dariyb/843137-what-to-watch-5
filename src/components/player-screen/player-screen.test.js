import React from "react";
import renderer from "react-test-renderer";
import PlayerScreen from "./player-screen";
import {noop} from "../../utils-test";

describe(`Render PlayerScreen`, () => {
  it(`Play`, () => {
    const tree = renderer
    .create(
        <PlayerScreen
          onExitClick={noop}
          playFilm={true}
          progressFilm={2}
          timeLeft={45}
          onFullScreenClick={noop}
          onPauseClick={noop}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Pause`, () => {
    const tree = renderer
    .create(
        <PlayerScreen
          onExitClick={noop}
          playFilm={false}
          progressFilm={2}
          timeLeft={45}
          onFullScreenClick={noop}
          onPauseClick={noop}
        />
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
