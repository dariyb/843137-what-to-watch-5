import {loadFilms} from "./action";
import {adaptFilmToClient} from "../utils";

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then(({data}) => dispatch(loadFilms(data.map(adaptFilmToClient)), console.log(data)))
);
