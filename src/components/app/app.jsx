import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen";

const App = (props) => {
  const {title, genre, releaseDate} = props;

  return (
    <MainScreen title={title} genre={genre} releaseDate={releaseDate} />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default App;
