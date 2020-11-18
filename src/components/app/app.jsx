import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import MainScreen from "../main-screen/main-screen";
import SignInScreen from "../sign-in-screen/sign-in-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import AddReviewScreen from "../add-review-screen/add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import {propsForFilms} from "../../types";
import withPlayerScreen from "../../hocs/with-player-screen/with-player-screen";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";
import withSignIn from "../../hocs/with-sign-in/with-sign-in";
import {withRouter} from "react-router";

const PlayerScreenWrapper = withPlayerScreen(PlayerScreen);
const SignInWrapper = withSignIn(SignInScreen);
const FilmScreenWrapper = withRouter(FilmScreen);
const AddReviewWrapper = withRouter(AddReviewScreen);

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainScreen films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              onMyListClick={() => history.push(`/mylist`)}
              onPlayClick={() => history.push(`/player/1`)}
              onLogoClick={() => history.push(`/`)}
            />
          )}
        />
        <Route exact path="/login"
          render={({history}) => (
            <SignInWrapper
              onLogoClick={() => history.push(`/`)}
            />
          )}
        />
        <PrivateRoute exact path={`/mylist`}
          render={({history}) => {
            return (
              <MyListScreen films={films}
                onFilmCardClick={(id) => history.push(`/films/${id}`)}
                onLogoClick={() => history.push(`/`)}
              />
            );
          }}
        />
        <Route exact path="/films/:id"
          render={({history}) => (
            <FilmScreenWrapper films={films}
              onFilmCardClick={(id) => history.push(`/films/${id}`)}
              onLogoClick={() => history.push(`/`)}
              onAddReviewClick={(id) => history.push(`/films/${id}/review`)}
              onMyListClick={() => history.push(`/mylist`)}
              onPlayClick={() => history.push(`/player/6`)}
            />
          )}
        />
        <PrivateRoute exact path={`/films/:id/review`}
          render={({history}) => {
            return (
              <AddReviewWrapper films={films}
                onLogoClick={() => history.push(`/`)}
                onFilmCardClick={(id) => history.push(`/films/${id}`)}
                onFilmTitleClick={() => history.goBack()}
              />
            );
          }}
        />
        <Route exact path="/player/:id"
          render={({history}) => (
            <PlayerScreenWrapper
              films={films}
              onExitClick={() => history.goBack()}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(propsForFilms),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
};

const mapStatetoProps = ({DATA}) => ({
  films: DATA.films,
});

export {App};
export default connect(mapStatetoProps)(App);
