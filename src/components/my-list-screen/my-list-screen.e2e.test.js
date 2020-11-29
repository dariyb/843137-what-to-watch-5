import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyListScreen from "./my-list-screen";
import {films, noop, noopWithId} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On logo in my-list should click`, () => {
  const onLogoClick = jest.fn();

  const myListScreen = shallow(
      <MyListScreen
        films={films}
        onFilmCardClick={noopWithId}
        onLogoClick={onLogoClick}
        onMyListClick={noop}
      />

  );

  const logoLink = myListScreen.find(`.logo__link`);
  logoLink.simulate(`click`);
  expect(onLogoClick).toHaveBeenCalledTimes(1);
});
