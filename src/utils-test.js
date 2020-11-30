import configureMockStore from "redux-mock-store";

const VARIANT_TABS = [`Overview`, `Details`, `Reviews`];

const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    userData: {},
    authorizationStatus: `NO_AUTH`
  },
  DATA: {
    film: {
      title: `Mind Hunter`,
      genre: `Mystery`,
      releaseDate: 2005,
      poster: `/img/the-grand-budapest-hotel-poster.jpg`,
      preview: `/img/mindhunter.jpg`,
      backgroundPoster: `/img/bg-header.jpg`,
      description: `FBI agent tries to solve murders all around the USA`,
      rating: 10.0,
      ratingAmount: 350,
      director: `Dan Desk`,
      cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
      runningTime: 50,
      filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      id: 3,
      backgroundColor: `#73B39A`,
      fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
    },
    films: [
      {
        title: `Fantastic Beasts`,
        genre: `Fantasy`,
        releaseDate: 2018,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New amazing story from J.K.Rowling, new adventures in wizards world`,
        rating: 10.0,
        ratingAmount: 500,
        director: `Curt Russel`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 20,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 1,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Zombi Jack`,
        genre: `Horror`,
        releaseDate: 2020,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/midnight-special.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New flash eating virus trying to destory the world`,
        rating: 5.5,
        ratingAmount: 30,
        director: `Wes Kraven`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 30,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 2,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Mind Hunter`,
        genre: `Mystery`,
        releaseDate: 2005,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/mindhunter.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `FBI agent tries to solve murders all around the USA`,
        rating: 10.0,
        ratingAmount: 350,
        director: `Dan Desk`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 40,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 3,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
    ]
  }
});

const storeAuth = mockStore({
  USER: {
    userData: {
      data: {
        id: 1,
        email: `DonCaron@gmail.com`,
        name: `DonCaron`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`
      }
    },
    authorizationStatus: `AUTH`
  },
  DATA: {
    film: {
      title: `Mind Hunter`,
      genre: `Mystery`,
      releaseDate: 2005,
      poster: `/img/the-grand-budapest-hotel-poster.jpg`,
      preview: `/img/mindhunter.jpg`,
      backgroundPoster: `/img/bg-header.jpg`,
      description: `FBI agent tries to solve murders all around the USA`,
      rating: 10.0,
      ratingAmount: 350,
      director: `Dan Desk`,
      cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
      runningTime: 50,
      filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      id: 3,
      backgroundColor: `#73B39A`,
      fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
      isFavorite: false,
    },
    films: [
      {
        title: `Fantastic Beasts`,
        genre: `Fantasy`,
        releaseDate: 2018,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New amazing story from J.K.Rowling, new adventures in wizards world`,
        rating: 10.0,
        ratingAmount: 500,
        director: `Curt Russel`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 20,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 1,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Zombi Jack`,
        genre: `Horror`,
        releaseDate: 2020,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/midnight-special.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `New flash eating virus trying to destory the world`,
        rating: 5.5,
        ratingAmount: 30,
        director: `Wes Kraven`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 30,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 2,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
      {
        title: `Mind Hunter`,
        genre: `Mystery`,
        releaseDate: 2005,
        poster: `/img/the-grand-budapest-hotel-poster.jpg`,
        preview: `/img/mindhunter.jpg`,
        backgroundPoster: `/img/bg-header.jpg`,
        description: `FBI agent tries to solve murders all around the USA`,
        rating: 10.0,
        ratingAmount: 350,
        director: `Dan Desk`,
        cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
        runningTime: 40,
        filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        id: 3,
        backgroundColor: `#73B39A`,
        fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
        isFavorite: false,

      },
    ]
  }
});

const films = [
  {
    title: `Fantastic Beasts`,
    genre: `Fantasy`,
    releaseDate: 2018,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    preview: `/img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundPoster: `/img/bg-header.jpg`,
    description: `New amazing story from J.K.Rowling, new adventures in wizards world`,
    rating: 10.0,
    ratingAmount: 500,
    director: `Curt Russel`,
    cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
    runningTime: 20,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 1,
    backgroundColor: `#73B39A`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,

  },
  {
    title: `Zombi Jack`,
    genre: `Horror`,
    releaseDate: 2020,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    preview: `/img/midnight-special.jpg`,
    backgroundPoster: `/img/bg-header.jpg`,
    description: `New flash eating virus trying to destory the world`,
    rating: 5.5,
    ratingAmount: 30,
    director: `Wes Kraven`,
    cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
    runningTime: 30,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 2,
    backgroundColor: `#73B39A`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: false,

  },
  {
    title: `Mind Hunter`,
    genre: `Mystery`,
    releaseDate: 2005,
    poster: `/img/the-grand-budapest-hotel-poster.jpg`,
    preview: `/img/mindhunter.jpg`,
    backgroundPoster: `/img/bg-header.jpg`,
    description: `FBI agent tries to solve murders all around the USA`,
    rating: 10.0,
    ratingAmount: 350,
    director: `Dan Desk`,
    cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
    runningTime: 40,
    filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    id: 3,
    backgroundColor: `#73B39A`,
    fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    isFavorite: true,

  },
];

const film = {
  title: `Mind Hunter`,
  genre: `Mystery`,
  releaseDate: 2005,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  preview: `/img/mindhunter.jpg`,
  backgroundPoster: `/img/bg-header.jpg`,
  description: `FBI agent tries to solve murders all around the USA`,
  rating: 10.0,
  ratingAmount: 350,
  director: `Dan Desk`,
  cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
  runningTime: 40,
  filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: 3,
  backgroundColor: `#73B39A`,
  fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isFavorite: false,
};

const userData = {
  data: {
    id: 1,
    email: `DonCaron@gmail.com`,
    name: `DonCaron`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/10.jpg`,
  }
};

const match = {params: {id: `1`}};

const noop = () => {};
const noopWithId = (id) => {
  return id;
};

const reviews = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Zack`,
    },
    rating: 3.4,
    comment: `Cool thing, love it!`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    user: {
      id: 3,
      name: `Kate Muir`,
    },
    rating: 3.8,
    comment: `Watch it now everyone!`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

const activeState = {
  reviewRating: ``,
  reviewText: ``,
  error: false,
};

const activeStateSignIn = {
  login: ``,
  password: ``,
};

const filmFromServer = {
  // eslint-disable-next-line camelcase
  background_color: `#73B39A`,
  // eslint-disable-next-line camelcase
  background_image: `/img/bg-header.jpg`,
  description: `FBI agent tries to solve murders all around the USA`,
  director: `Dan Desk`,
  genre: `Mystery`,
  id: 3,
  // eslint-disable-next-line camelcase
  is_favorite: false,
  name: `Mind Hunter`,
  // eslint-disable-next-line camelcase
  poster_image: `/img/the-grand-budapest-hotel-poster.jpg`,
  // eslint-disable-next-line camelcase
  preview_image: `/img/mindhunter.jpg`,
  // eslint-disable-next-line camelcase
  preview_video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 10.0,
  released: 2005,
  // eslint-disable-next-line camelcase
  run_time: 40,
  // eslint-disable-next-line camelcase
  scores_count: 350,
  starring: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
  // eslint-disable-next-line camelcase
  video_link: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

const filmChanged = {
  title: `Mind Hunter`,
  genre: `Mystery`,
  releaseDate: 2005,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  preview: `/img/mindhunter.jpg`,
  backgroundPoster: `/img/bg-header.jpg`,
  description: `FBI agent tries to solve murders all around the USA`,
  rating: 10.0,
  ratingAmount: 350,
  director: `Dan Desk`,
  cast: [`Kim Check`, `Alan Rickman`, `Peter Brower`],
  runningTime: 40,
  filmPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  id: 3,
  backgroundColor: `#73B39A`,
  fullVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  isFavorite: true,
};

export {films, film, noop, noopWithId, store, storeAuth, userData, match, reviews, activeState, activeStateSignIn, VARIANT_TABS, filmFromServer, filmChanged};
