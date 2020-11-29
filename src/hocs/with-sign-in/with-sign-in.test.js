import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withSignIn from "./with-sign-in";
import {noop} from "../../utils-test";

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

const MockComponentWrapped = withSignIn(MockComponent);

it(`withSignIn is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onLogoClick={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
