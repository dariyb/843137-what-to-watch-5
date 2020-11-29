import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {SignInScreen} from "./sign-in-screen";
import {noop, activeStateSignIn} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On logo in sign-in-screen should click`, () => {
  const onLogoLinkClick = jest.fn();

  const signInScreen = shallow(
      <SignInScreen
        onLogoClick={onLogoLinkClick}
        onSubmit={noop}
        onChange={noop}
        activeState={activeStateSignIn}
      />

  );

  const logoLink = signInScreen.find(`.logo__link`);
  logoLink.simulate(`click`);
  expect(onLogoLinkClick).toHaveBeenCalledTimes(1);
});

it(`On submit in sign-in-screen should click`, () => {
  const onSubmitClick = jest.fn();

  const signInScreen = shallow(
      <SignInScreen
        onLogoClick={noop}
        onSubmit={onSubmitClick}
        onChange={noop}
        activeState={activeStateSignIn}
      />

  );

  const submitForm = signInScreen.find(`form`);
  submitForm.simulate(`submit`, {preventDefault() {}});
  expect(onSubmitClick).toHaveBeenCalledTimes(1);
});

it(`On change email in sign-in-screen should click`, () => {
  const onChangeInput = jest.fn();

  const signInScreen = shallow(
      <SignInScreen
        onLogoClick={noop}
        onSubmit={noop}
        onChange={onChangeInput}
        activeState={activeStateSignIn}
      />

  );

  const changeInput = signInScreen.find(`input`).at(0);
  changeInput.simulate(`change`, {target: {value: `DonCaron@gmail.com`}});
  expect(onChangeInput).toHaveBeenCalledTimes(1);
});

it(`On change password in sign-in-screen should click`, () => {
  const onChangePassInput = jest.fn();

  const signInScreen = shallow(
      <SignInScreen
        onLogoClick={noop}
        onSubmit={noop}
        onChange={onChangePassInput}
        activeState={activeStateSignIn}
      />

  );

  const changePassInput = signInScreen.find(`input`).at(1);
  changePassInput.simulate(`change`, {target: {value: `64654654`}});
  expect(onChangePassInput).toHaveBeenCalledTimes(1);
});
