import {extend, tabsFilmGenres, getFilmsByGenre} from "../utils";
import films from "../mocks/films";
import {ActionType} from "./action";

const initialState = {
  activeGenre: tabsFilmGenres[0],
  filmsList: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.GET_CURRENT_GENRE_FILMS_LIST:
      return extend(state, {
        filmsList: getFilmsByGenre(films, action.payload)
      });
  }
  return state;
};

export {reducer};
