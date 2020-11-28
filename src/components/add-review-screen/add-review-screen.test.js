import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import AddReviewScreen from "./add-review-screen";
import {films, noop, storeAuth, match} from "../../utils-test";

it(`Render AddReviewScreen`, () => {
  const tree = renderer
  .create(
      <Provider store={storeAuth}>
        <MemoryRouter>
          <AddReviewScreen
            films={films}
            onLogoClick={noop}
            onFilmTitleClick={noop}
            onMyListClick={noop}
            match={match}
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
