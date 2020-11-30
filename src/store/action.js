const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  UPDATE_FILM: `UPDATE_FILM`,
  UPDATE_PROMO_FILM: `UPDATE_PROMO_FILM`,
  LOAD_USER_DATA: `LOAD_USER_DATA`,
};

const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});
const loadPromoFilm = (film) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: film
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
const updateFilm = (film) => ({
  type: ActionType.UPDATE_FILM,
  payload: film,
});
const updatePromoFilm = (film) => ({
  type: ActionType.UPDATE_PROMO_FILM,
  payload: film,
});
const loadUserData = (userInfo) => ({
  type: ActionType.LOAD_USER_DATA,
  payload: userInfo,
});


export {ActionType, loadFilms, requireAuthorization, redirectToRoute, loadFilmComments, loadPromoFilm, updateFilm, updatePromoFilm, loadUserData};
