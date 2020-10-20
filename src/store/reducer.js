import {extend, tabsFilmGenres, getFilmsByGenre} from "../utils";
import films from "../mocks/films";
import {ActionType} from "./action";

const INITIAL_NUMBER_OF_CARDS = 8;

const initialState = {
  activeGenre: tabsFilmGenres[0],
  filmsList: films,
  numberOfShownCards: films.slice(0, INITIAL_NUMBER_OF_CARDS),
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
    case ActionType.SHOW_MORE:
      return extend(state, {
        numberOfShownCards: action.payload
      });
  }
  return state;
};

export {reducer};
