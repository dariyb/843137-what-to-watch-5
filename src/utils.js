const INITIAL_NUMBER_OF_FILMS = 8;

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const RatingScore = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10
};

const getTextScore = (ratingScore) => {
  let textScore = null;
  switch (true) {
    case ratingScore >= RatingScore.BAD && ratingScore < RatingScore.NORMAL:
      textScore = `Bad`;
      break;
    case ratingScore >= RatingScore.NORMAL && ratingScore < RatingScore.GOOD:
      textScore = `Normal`;
      break;
    case ratingScore >= RatingScore.GOOD && ratingScore < RatingScore.VERY_GOOD:
      textScore = `Good`;
      break;
    case ratingScore >= RatingScore.VERY_GOOD && ratingScore < RatingScore.AWESOME:
      textScore = `Very Good`;
      break;
    case ratingScore === RatingScore.AWESOME:
      textScore = `Awesome`;
      break;
  }
  return textScore;
};

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const tabsFilmScreen = [`Overview`, `Details`, `Reviews`];
const tabsFilmGenres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids&Family`, `Romance`, `Sci-Fi`, `Thrillers`];

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getFilmsByGenre = (films, genre) => {
  if (genre === tabsFilmGenres[0]) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

const returnLeftTime = (filmTime) => {
  const addZero = (time) => {
    return (time < 10) ? `0` + time : time;
  };

  let hours = addZero(Math.floor(filmTime / 3600));
  let minutes = addZero(Math.floor((filmTime - (hours * 3600)) / 60));
  let seconds = addZero(Math.floor(filmTime - (hours * 3600) - (minutes * 60)));

  return `${hours}:${minutes}:${seconds}`;
};

const adaptFilmToClient = (film) => {
  const adaptedFilm = {
    backgroundColor: film.background_color,
    id: film.id,
    preview: film.preview_image,
    title: film.name,
    poster: film.poster_image,
    backgroundPoster: film.background_image,
    genre: film.genre,
    releaseDate: film.released,
    description: film.description,
    rating: film.rating,
    ratingAmount: film.scores_count,
    cast: film.starring,
    director: film.director,
    isFavorite: film.is_favorite,
    runningTime: film.run_time,
    filmPreview: film.preview_video_link,
    fullVideo: film.video_link
  };

  return adaptedFilm;
};

const getFilmForId = (filmId, films) => {
  return films.find((film) => film.id === Number(filmId));
};

const returnFavFilms = (films) => {
  return films.filter((film) => film.isFavorite === true);
};

const favoriteStatus = (isFavorite) => {
  if (isFavorite) {
    return 0;
  } else {
    return 1;
  }
};

const returnUpdatedFilm = (films, changedFilm) => {
  return films.map((film) => film.id === changedFilm.id ? changedFilm : film);
};


export {getTextScore, TABS, tabsFilmScreen, extend, tabsFilmGenres, getFilmsByGenre, INITIAL_NUMBER_OF_FILMS, returnLeftTime, AuthorizationStatus, adaptFilmToClient, getFilmForId, favoriteStatus, returnFavFilms, returnUpdatedFilm};
