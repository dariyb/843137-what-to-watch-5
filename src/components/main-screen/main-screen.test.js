import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {MainScreen} from "./main-screen";
import {films, film, noop, noopWithId, store, storeAuth} from "../../utils-test";

describe(`Should render Mainscreen correctly`, () => {
  it(`With Auth`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <MainScreen
              films={films}
              film={film}
              onFilmCardClick={noopWithId}
              onMyListClick={noop}
              onPlayClick={noopWithId}
              onLogoClick={noop}
              isAuthorised={true}
              onFavClick={noopWithId}
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

  it(`Without Auth`, () =>{
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <MainScreen
              films={films}
              film={film}
              onFilmCardClick={noopWithId}
              onMyListClick={noop}
              onPlayClick={noopWithId}
              onLogoClick={noop}
              isAuthorised={false}
              onFavClick={noopWithId}
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
