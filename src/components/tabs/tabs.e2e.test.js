import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tabs from "./tabs";
import {film, noop, reviews} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On tab overview/details should click`, () => {
  const onTabClick = jest.fn();

  const tabsScreen = shallow(
      <Tabs
        film={film}
        onClick={onTabClick}
        showActiveTab={noop}
        isActive={`Overview`}
      />

  );

  const tabLink = tabsScreen.find(`.movie-nav__link`).at(0);
  tabLink.simulate(`click`);
  expect(onTabClick).toHaveBeenCalledTimes(1);
});

it(`On tab reviews should click`, () => {
  const onTabClick = jest.fn();

  const tabsScreen = shallow(
      <Tabs
        film={film}
        reviews={reviews}
        onClick={onTabClick}
        showActiveTab={noop}
        isActive={`Reviews`}
      />

  );

  const tabLink = tabsScreen.find(`.movie-nav__link`).at(2);
  tabLink.simulate(`click`);
  expect(onTabClick).toHaveBeenCalledTimes(1);
});
