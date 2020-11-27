import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";

it(`Render VideoPlayer`, () => {
  const tree = renderer
      .create(
          <VideoPlayer
            filmPreview={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
            preview={`https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`}
          />, {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
