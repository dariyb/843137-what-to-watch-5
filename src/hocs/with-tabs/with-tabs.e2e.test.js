import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveTab from "./with-tabs";
import {film, reviews, variantTabs} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = () => `null`;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should change state of active tab`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        film={film}
        reviews={reviews}
        variantTabs={variantTabs}
      />
  );

  expect(wrapper.state().activeTab).toEqual(`Overview`);
});
