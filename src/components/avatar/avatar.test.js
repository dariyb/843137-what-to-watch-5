import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {Avatar} from "./avatar";
import {MemoryRouter} from "react-router-dom";
import {storeAuth, noop, userData} from "../../utils-test";

describe(`Should render Avatar`, () => {
  it(`Render Avatar with auth`, () => {
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <Avatar
              onMyListClick={noop}
              userData={userData}
            />
          </MemoryRouter>
        </Provider>
        ,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
