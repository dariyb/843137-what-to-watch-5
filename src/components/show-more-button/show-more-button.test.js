import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";
import {noop} from "../../utils-test";

it(`Render ShowMoreButton`, () => {
  const tree = renderer
  .create(
      <ShowMoreButton
        onClick={noop}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
