import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withButton from "./with-button";
import withMovieList from "../with-movie-list/with-movie-list";
import {films, noop} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => `null`;
const MockComponentWrapped = withButton(withMovieList(MockComponent));

it(`Should change number of shown films`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        films={films}
        onFilmCardClick={noop}
        activeNumberOfFilms={8}
        onMouseEnter={noop}
        onMouseLeave={noop}
      />
  );

  expect(wrapper.state().activeNumberOfFilms).toEqual(8);
});
