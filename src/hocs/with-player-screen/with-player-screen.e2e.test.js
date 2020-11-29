import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PropTypes from "prop-types";
import withPlayerScreen from "./with-player-screen";
import {films, match} from "../../utils-test";

Enzyme.configure({
  adapter: new Adapter(),
});

window.HTMLMediaElement.prototype.play = () => {};

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
const MockComponentWrapped = withPlayerScreen(MockComponent);

it(`Should change state of playing film`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        films={films}
        match={match}
      >
        <React.Fragment/>
      </MockComponentWrapped>
  );

  expect(wrapper.state().playFilm).toEqual(true);
});
