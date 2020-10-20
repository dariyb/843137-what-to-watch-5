const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_CURRENT_GENRE_FILMS_LIST: `GET_CURRENT_GENRE_FILMS_LIST`,
  SHOW_MORE: `SHOW_MORE`,
};

const ActionCreator = {
  changeGenre: (filter) => ({
    type: ActionType.CHANGE_GENRE,
    payload: filter,
  }),
  filterFilmsList: (filter) => ({
    type: ActionType.GET_CURRENT_GENRE_FILMS_LIST,
    payload: filter,
  }),
  showMoreFilms: (shownCards) => ({
    type: ActionType.SHOW_MORE,
    payload: shownCards
  })
};

export {ActionType, ActionCreator};
