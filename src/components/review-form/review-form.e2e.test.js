import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewForm} from "./review-form";
import {noop, activeState} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On review submit should click`, () => {
  const reviewSubmit = jest.fn();

  const reviewScreen = shallow(
      <ReviewForm
        onSubmit={reviewSubmit}
        currentRating={`5`}
        onChangeRating={noop}
        onChangeText={noop}
        reviewTextValue={`fine to watch`}
        activeState={activeState}
        filmId={1}
        error={true}
        errorFunc={noop}
      />

  );

  const submitForm = reviewScreen.find(`form`);
  submitForm.simulate(`submit`, {preventDefault() {}});
  expect(reviewSubmit).toHaveBeenCalledTimes(1);
});

it(`On review rating change`, () => {
  const changeRating = jest.fn();

  const reviewScreen = shallow(
      <ReviewForm
        onSubmit={noop}
        currentRating={`5`}
        onChangeRating={changeRating}
        onChangeText={noop}
        reviewTextValue={`fine to watch`}
        activeState={activeState}
        filmId={1}
        error={true}
        errorFunc={noop}
      />

  );

  const ratingInput = reviewScreen.find(`input`).at(2);
  ratingInput.simulate(`change`, {target: {value: `3`}});
  expect(changeRating).toHaveBeenCalledTimes(1);
});

it(`On review text change`, () => {
  const changeReviewText = jest.fn();

  const reviewScreen = shallow(
      <ReviewForm
        onSubmit={noop}
        currentRating={`5`}
        onChangeRating={noop}
        onChangeText={changeReviewText}
        reviewTextValue={`fine to watch`}
        activeState={activeState}
        filmId={1}
        error={true}
        errorFunc={noop}
      />

  );

  const textInput = reviewScreen.find(`.add-review__textarea`);
  textInput.simulate(`change`, {target: {value: `kfngdngldfngldnglkdngldng`}});
  expect(changeReviewText).toHaveBeenCalledTimes(1);
});
