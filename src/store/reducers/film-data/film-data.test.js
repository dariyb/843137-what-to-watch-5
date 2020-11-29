import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {filmData} from "./film-data";
import {ActionType} from "../../action";
import {fetchPromoFilm, fetchFilmComments, fetchFilmsList} from "../../api-actions";
import {films, reviews, film, filmFromServer, filmChanged} from "../../../utils-test";
import {returnUpdatedFilm} from "../../../utils";

const api = createAPI(() => {});
const apiMock = new MockAdapter(api);
const dispatch = jest.fn();

const changedFilm = returnUpdatedFilm(films, filmChanged);

it(`Return initial state`, () => {
  expect(filmData(void 0, {})).toEqual({
    films: [],
    comments: [],
    film: {},
  });
});

it(`Return films after load`, () => {
  expect(filmData({
    films: [],
  },
  {
    type: ActionType.LOAD_FILMS,
    payload: films,
  }
  )).toEqual({
    films,
  });
});

it(`Return comments after load`, () => {
  expect(filmData({
    comments: [],
  },
  {
    type: ActionType.LOAD_COMMENTS,
    payload: reviews,
  }
  )).toEqual({
    comments: reviews,
  });
});

it(`Return promo film after load`, () => {
  expect(filmData({
    film: {},
  },
  {
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }
  )).toEqual({
    film,
  });
});

it(`Return updated films after load and change`, () => {
  expect(filmData({
    films,
  },
  {
    type: ActionType.UPDATE_FILM,
    payload: changedFilm,
  }
  )).toEqual({
    films: changedFilm,
  });
});

it(`Return updated promo film after load and change`, () => {
  expect(filmData({
    film,
  },
  {
    type: ActionType.UPDATE_PROMO_FILM,
    payload: changedFilm,
  }
  )).toEqual({
    film: changedFilm,
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make correct API call to films`, () => {
    const filmsLoader = fetchFilmsList();

    apiMock
    .onGet(`/films`)
    .reply(200, [filmFromServer]);

    return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: [film]
      });
    });
  });

  it(`Should make correct API call to comments`, () => {
    const commentsLoader = fetchFilmComments();
    const commentsUrl = `/comments`;
    const url = new RegExp(`${commentsUrl}/*`);

    apiMock
    .onGet(url)
    .reply(200, reviews);

    return commentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: reviews,
      });
    });
  });

  it(`Should make correct API call to promo film`, () => {
    const filmPromoLoader = fetchPromoFilm();

    apiMock
    .onGet(`/films/promo`)
    .reply(200, filmFromServer);

    return filmPromoLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_PROMO_FILM,
        payload: film
      });
    });
  });

});
