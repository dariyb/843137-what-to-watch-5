import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FooterScreen from "./footer-screen";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On logo in footer should click`, () => {
  const onLogoLinkClick = jest.fn();

  const footerScreen = shallow(
      <FooterScreen
        onLogoClick={onLogoLinkClick}
      />

  );

  const logoLink = footerScreen.find(`.logo__link`);
  logoLink.simulate(`click`);
  expect(onLogoLinkClick).toHaveBeenCalledTimes(1);
});
