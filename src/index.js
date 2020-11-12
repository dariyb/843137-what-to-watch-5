import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
// import films from "./mocks/films";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import {requireAuthorization} from "./store/action";
import {fetchFilmsList, checkAuth} from "./store/api-actions";
import {AuthorizationStatus} from "./utils";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

// store.dispatch(fetchFilmsList());
// store.dispatch(checkAuth());
//
// ReactDOM.render(
//     <Provider store={store}>
//       <App/>
//     </Provider>,
//     document.querySelector(`#root`)
// );

Promise.all([
  store.dispatch(fetchFilmsList()),
  store.dispatch(checkAuth()),
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
      document.querySelector(`#root`)
  );
});
