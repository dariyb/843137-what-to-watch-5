import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";
import {noop, activeState, storeAuth} from "../../utils-test";

describe(`Render ReviewForm`, () => {
  it(`With error`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <ReviewForm
              onSubmit={noop}
              currentRating={`5`}
              onChangeRating={noop}
              onChangeText={noop}
              reviewTextValue={`fine to watch`}
              activeState={activeState}
              filmId={1}
              error={true}
              errorFunc={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Without error`, () =>{
    const tree = renderer
    .create(
        <Provider store={storeAuth}>
          <MemoryRouter>
            <ReviewForm
              onSubmit={noop}
              currentRating={`5`}
              onChangeRating={noop}
              onChangeText={noop}
              reviewTextValue={`fine to watch`}
              activeState={activeState}
              filmId={1}
              error={false}
              errorFunc={noop}
            />
          </MemoryRouter>
        </Provider>
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
