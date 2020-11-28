import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddReviewScreen from "./add-review-screen";
import {films, noop, match} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On logo should click`, () => {
  const onLogoButtonClick = jest.fn();

  const addReviewScreen = shallow(
      <AddReviewScreen
        films={films}
        onLogoClick={onLogoButtonClick}
        onFilmTitleClick={noop}
        onMyListClick={noop}
        match={match}
      />

  );

  const logoLink = addReviewScreen.find(`.logo__link`);
  logoLink.simulate(`click`);
  expect(onLogoButtonClick).toHaveBeenCalledTimes(1);
});

it(`On title should click`, () => {
  const onTitleClick = jest.fn();

  const addReviewScreen = shallow(
      <AddReviewScreen
        films={films}
        onLogoClick={noop}
        onFilmTitleClick={onTitleClick}
        onMyListClick={noop}
        match={match}
      />

  );

  const titleLink = addReviewScreen.find(`.breadcrumbs__link.title`);
  titleLink.simulate(`click`);
  expect(onTitleClick).toHaveBeenCalledTimes(1);
});
