const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_CURRENT_GENRE_FILMS_LIST: `GET_CURRENT_GENRE_FILMS_LIST`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  changeGenre: (filter) => ({
    type: ActionType.CHANGE_GENRE,
    payload: filter,
  }),
  filterFilmsList: (filter) => ({
    type: ActionType.GET_CURRENT_GENRE_FILMS_LIST,
    payload: filter,
  })
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});
const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});
const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

const loadFilmComments = (comments) => ({
  type: ActionType.LOAD_COMMENTS,
  payload: comments,
});

export {ActionType, ActionCreator, loadFilms, requireAuthorization, redirectToRoute, loadFilmComments};
