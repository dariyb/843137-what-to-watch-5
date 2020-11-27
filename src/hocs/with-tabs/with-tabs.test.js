import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveTab from "./with-tabs";
import {film, reviews} from "../../utils-test";

const variantTabs = [`Overview`, `Details`, `Reviews`];

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

const MockComponentWrapped = withActiveTab(MockComponent);

it(`withActiveTab is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      film={film}
      reviews={reviews}
      variantTabs={variantTabs}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
