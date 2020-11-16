import {extend} from "../../../utils";
import {ActionType} from "../../action";
// import films from "../../../mocks/films";

const initialState = {
  films: [],
  comments: [],
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
  }
  return state;
};

export {filmData};
