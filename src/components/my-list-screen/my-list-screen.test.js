import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import MyListScreen from "./my-list-screen";
import {films, noop, noopWithId, storeAuth} from "../../utils-test";

describe(`Render MyListScreen`, () => {
  it(`With favorite films`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <MyListScreen
              films={films}
              onFilmCardClick={noopWithId}
              onLogoClick={noop}
              onMyListClick={noop}
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

  it(`Without favorite films`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <MyListScreen
              films={films}
              onFilmCardClick={noopWithId}
              onLogoClick={noop}
              onMyListClick={noop}
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
