import {extend, returnUpdatedFilm} from "../../../utils";
import {ActionType} from "../../action";

const initialState = {
  films: [],
  comments: [],
  film: {},
};

const filmData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        film: action.payload,
      });
    case ActionType.UPDATE_FILM:
      return extend(state, {
        films: returnUpdatedFilm(state.films, action.payload),
      });
    case ActionType.UPDATE_PROMO_FILM:
      return extend(state, {
        film: action.payload,
      });
  }
  return state;
};

export {filmData};
