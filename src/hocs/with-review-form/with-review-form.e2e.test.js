import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewForm from "./with-review-form";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => `null`;
const MockComponentWrapped = withReviewForm(MockComponent);

it(`Should change state on sending review`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        id={1}
      />
  );

  expect(wrapper.state().error).toEqual(false);
  expect(wrapper.state().reviewRating).toEqual(``);
  expect(wrapper.state().reviewText).toEqual(``);

  wrapper.instance()._onChangeRating({target: {name: `reviewRating`, value: `3`}});
  expect(wrapper.state().reviewRating).toEqual(`3`);

  wrapper.instance()._onChangeText({target: {name: `reviewText`, value: `nnnmmmnnncccccccccccccccccccccccccccccccccccccccccccccc`}});
  expect(wrapper.state().reviewText).toEqual(`nnnmmmnnncccccccccccccccccccccccccccccccccccccccccccccc`);

  wrapper.instance().showError({target: {error: true}});
  expect(wrapper.state().error).toEqual(true);
});
