import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On button should click`, () => {
  const onButtonClick = jest.fn();

  const showMoreButtonWrapper = shallow(
      <ShowMoreButton
        onClick={onButtonClick}
      />

  );

  const showMore = showMoreButtonWrapper.find(`.catalog__button`);
  showMore.simulate(`click`);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
