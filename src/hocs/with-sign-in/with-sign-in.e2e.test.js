import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSignIn from "./with-sign-in";
import {noop} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => `null`;
const MockComponentWrapped = withSignIn(MockComponent);

it(`Should change sign-in state`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        onLogoClick={noop}
      />
  );

  wrapper.instance().onChangeInput({target: {name: `login`, value: `donCaron@mail.ru`}});
  expect(wrapper.state().login).toEqual(`donCaron@mail.ru`);
  wrapper.instance().onChangeInput({target: {name: `password`, value: `641654654`}});
  expect(wrapper.state().password).toEqual(`641654654`);
});
