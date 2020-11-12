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

const PlayerScreenWrapper = withPlayerScreen(PlayerScreen);

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainScreen films={films}
              onFilmCardClick={() => history.push(`/films/6`)}
              onMyListClick={() => history.push(`/mylist`)}
              onPlayClick={() => history.push(`/player/6`)}
              onLogoClick={() => history.push(`/`)}
            />
          )}
        />
        <Route exact path="/login"
          render={({history}) => (
            <SignInScreen
              onLogoClick={() => history.push(`/`)}
            />
          )}
        />
        <PrivateRoute exact path={`/mylist`}
          render={({history}) => {
            return (
              <MyListScreen films={films}
                onFilmCardClick={() => history.push(`/films/6`)}
                onLogoClick={() => history.push(`/`)}
              />
            );
          }}
        />
        <Route exact path="/films/:id"
          render={({history}) => (
            <FilmScreen films={films}
              onFilmCardClick={() => history.push(`/films/6`)}
              onLogoClick={() => history.push(`/`)}
              onAddReviewClick={() => history.push(`/films/6/review`)}
              onMyListClick={() => history.push(`/mylist`)}
              onPlayClick={() => history.push(`/player/6`)}
            />
          )}
        />
        <PrivateRoute exact path={`/films/:id/review`}
          render={({history}) => {
            return (
              <AddReviewScreen films={films}
                onLogoClick={() => history.push(`/`)}
                onFilmTitleClick={() => history.push(`/films/6`)}
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
};

const mapStatetoProps = ({DATA}) => ({
  films: DATA.films,
});

export {App};
export default connect(mapStatetoProps)(App);
