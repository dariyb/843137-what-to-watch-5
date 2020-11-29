import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Avatar} from "./avatar";
import {userData} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`On avatar should click`, () => {
  const onMylistClick = jest.fn();

  const avatarScreen = shallow(
      <Avatar
        onMyListClick={onMylistClick}
        userData={userData}
      />

  );

  const listLink = avatarScreen.find(`.user-block__avatar img`);
  listLink.simulate(`click`);
  expect(onMylistClick).toHaveBeenCalledTimes(1);
});
