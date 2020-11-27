import React from "react";
import renderer from "react-test-renderer";
import MoviewReviews from "./movie-reviews";
import {reviews} from "../../utils-test";

it(`Render MoviewReviews`, () => {
  const tree = renderer
  .create(
      <MoviewReviews
        reviews={reviews}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
