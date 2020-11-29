import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import {film, noop, reviews} from "../../utils-test";

describe(`Render Tabs`, () => {
  it(`Overview`, () =>{
    const tree = renderer
    .create(
        <Tabs
          film={film}
          onClick={noop}
          showActiveTab={noop}
          isActive={`Overview`}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Details`, () =>{
    const tree = renderer
    .create(
        <Tabs
          film={film}
          onClick={noop}
          showActiveTab={noop}
          isActive={`Details`}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Reviews`, () =>{
    const tree = renderer
    .create(
        <Tabs
          film={film}
          reviews={reviews}
          onClick={noop}
          showActiveTab={noop}
          isActive={`Reviews`}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
