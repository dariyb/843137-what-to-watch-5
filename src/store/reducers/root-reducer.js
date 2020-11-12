import {combineReducers} from "redux";
import {filmProcess} from "./film-process/film-process";
import {filmData} from "./film-data/film-data";
import {user} from "./user/user";
import {AuthorizationStatus} from "../../utils";

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

export const getAuthStatus = (state) => {
  const authStatus = state[NameSpace.USER].authorizationStatus;

  if (authStatus === AuthorizationStatus.AUTH) {
    return true;
  } else {
    return false;
  }
};
