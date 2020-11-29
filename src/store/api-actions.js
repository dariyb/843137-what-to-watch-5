import {loadFilms, requireAuthorization, redirectToRoute, loadFilmComments, loadPromoFilm, updateFilm, updatePromoFilm, loadUserData} from "./action";
import {adaptFilmToClient, AuthorizationStatus, favoriteStatus} from "../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(`/films/promo`)
    .then(({data}) => dispatch(loadPromoFilm(adaptFilmToClient(data))))
);

export const fetchFilmComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadFilmComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((user) => dispatch(loadUserData(user)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(redirectToRoute(`/`));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((user) => dispatch(loadUserData(user)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const publishReview = (id, {reviewRating, reviewText}, error) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating: reviewRating, comment: reviewText})
  .then(() => dispatch(redirectToRoute(`/films/${id}`)))
  .catch((err) => {
    if (err) {
      dispatch(error);
    }
  })
);

export const addToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${favoriteStatus(isFavorite)}`)
    .then(({data}) => dispatch(updateFilm(adaptFilmToClient(data))))
    .catch(() => {
      dispatch(redirectToRoute(`/login`));
    })
);

export const addPromoToFavorite = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${favoriteStatus(isFavorite)}`)
    .then(({data}) => {
      dispatch(updatePromoFilm(adaptFilmToClient(data)));
      dispatch(updateFilm(adaptFilmToClient(data)));
    })
    .catch(() => {
      dispatch(redirectToRoute(`/login`));
    })
);
