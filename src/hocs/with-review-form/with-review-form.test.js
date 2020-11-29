import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewForm from "./with-review-form";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

it(`withReviewForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      id={1}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
