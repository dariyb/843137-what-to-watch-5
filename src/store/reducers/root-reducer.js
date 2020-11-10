import {combineReducers} from "redux";
import {filmProcess} from "./film-process/film-process";
import {filmData} from "./film-data/film-data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  FILM: `FILM`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: filmData,
  [NameSpace.FILM]: filmProcess,
  [NameSpace.USER]: user,
});
