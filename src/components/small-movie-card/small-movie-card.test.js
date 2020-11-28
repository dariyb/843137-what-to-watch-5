import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {MemoryRouter} from "react-router-dom";
import {film, noop, noopWithId} from "../../utils-test";

describe(`Render SmallMovieCard`, () => {
  it(`Video is playing`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <SmallMovieCard
            film={film}
            onFilmCardClick={noopWithId}
            onMouseEnter={noop}
            onMouseLeave={noop}
            isVideoPlaying={true}
            filmPreview={film.filmPreview}
          />
        </MemoryRouter>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Video is not playing`, () => {
    const tree = renderer
    .create(
        <MemoryRouter>
          <SmallMovieCard
            film={film}
            onFilmCardClick={noopWithId}
            onMouseEnter={noop}
            onMouseLeave={noop}
            isVideoPlaying={false}
            filmPreview={film.filmPreview}
          />
        </MemoryRouter>
        , {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
