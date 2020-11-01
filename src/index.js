import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app";
// import films from "./mocks/films";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
// import {requireAuthorization} from "./store/action";
import {fetchFilmsList} from "./store/api-actions";
// import {AuthorizationStatus} from "./utils";

const api = createAPI(
    () => store.dispatch()
);

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(api))
);
debugger;
store.dispatch(fetchFilmsList());

ReactDOM.render(
    <Provider store={store}>
      <App
        // films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);
