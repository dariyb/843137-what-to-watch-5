import React from "react";
import renderer from "react-test-renderer";
import FooterScreen from "./footer-screen";
import {noop} from "../../utils-test";

it(`Render FooterScreen`, () => {
  const tree = renderer
  .create(
      <FooterScreen
        onLogoClick={noop}
      />
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
