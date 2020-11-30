import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveTab from "./with-tabs";
import {film, reviews, VARIANT_TABS} from "../../utils-test";

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
      variantTabs={VARIANT_TABS}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
