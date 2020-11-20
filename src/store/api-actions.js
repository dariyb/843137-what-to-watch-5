import {loadFilms, requireAuthorization, redirectToRoute, loadFilmComments} from "./action";
import {adaptFilmToClient, AuthorizationStatus} from "../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient))))
);

export const fetchFilmComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadFilmComments(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {
      dispatch(redirectToRoute(`/`));
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const publishReview = (id, {reviewRating, reviewText}, error) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {ratin: reviewRating, comment: reviewText})
  .then(() => dispatch(redirectToRoute(`/films/${id}`)))
  .catch(() => {
    return error;
  })
);
