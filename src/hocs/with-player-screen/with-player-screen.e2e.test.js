import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayerScreen from "./with-player-screen";
import {films, match} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => `<video/>`;
const MockComponentWrapped = withPlayerScreen(MockComponent);

it(`Should change state of playing film`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        films={films}
        match={match}
      />
  );

  expect(wrapper.state().playFilm).toEqual(false);
});
