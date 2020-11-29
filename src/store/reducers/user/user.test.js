import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {AuthorizationStatus} from "../../../utils";
import {checkAuth, login} from "../../api-actions";
import {userData} from "../../../utils-test";

const api = createAPI(() => {});

it(`Return initial state user data`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    userData: {},
  });
});

it(`Reducer should update authorizationStatus to "auth"`, () => {
  expect(user({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Return updated user data after authorization`, () => {
  expect(user({
    userData: {},
  }, {
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  })).toEqual({
    userData,
  });
});

describe(`Async operations should work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userLoader = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, [{fake: true}]);

    return userLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API post call to login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testUser = {login: `test@test.ru`, password: `123456`};
    const userStatus = login(testUser);

    apiMock
    .onPost(`/login`)
    .reply(200, [{fake: true}]);

    return userStatus(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: `/`,
      });
    });
  });

});
