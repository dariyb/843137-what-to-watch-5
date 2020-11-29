import React from "react";
import renderer from "react-test-renderer";
import SignInScreen from "./sign-in-screen";
import {MemoryRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store, noop, activeStateSignIn} from "../../utils-test";

it(`Render sign-in screen`, () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <MemoryRouter>
              <SignInScreen
                onLogoClick={noop}
                onSubmit={noop}
                onChange={noop}
                activeState={activeStateSignIn}
              />
            </MemoryRouter>
          </Provider>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();
  expect(tree).toMatchSnapshot();
});
