import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {App} from "./app";
import {films, film, store} from "../../utils-test";


it(`Render App`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <App
          films={films}
          film={film}
        />
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
