import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {FilmScreen} from "./film-screen";
import {films, noop, noopWithId, store, storeAuth, match} from "../../utils-test";

describe(`Render FilmScreen`, () => {
  it(`With Auth`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <FilmScreen
              films={films}
              onFilmCardClick={noopWithId}
              onLogoClick={noop}
              onAddReviewClick={noopWithId}
              onMyListClick={noop}
              onPlayClick={noopWithId}
              onLoad={noop}
              onFavClick={noopWithId}
              isAuthorised={true}
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

  it(`Without Auth`, () =>{
    const tree = renderer
    .create(
        <Provider store={store}>
          <MemoryRouter>
            <FilmScreen
              films={films}
              onFilmCardClick={noopWithId}
              onLogoClick={noop}
              onAddReviewClick={noopWithId}
              onMyListClick={noop}
              onPlayClick={noopWithId}
              onLoad={noop}
              onFavClick={noopWithId}
              isAuthorised={false}
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
});
