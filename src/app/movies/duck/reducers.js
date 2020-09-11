import types from "./types";

const initialMovies = {
  listName: "Best movies",
  list: ["RAMBO I", "RAMBO II", "RAMBO IV"]
};

const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return { ...state, list: [...state.list, action.movie] };
    case types.DELETE_MOVIE:
      return {
        ...state,
        list: state.list.filter((item) => item !== action.movie)
      };
    case types.RESET_MOVIES:
      return { ...state, list: [] };

    default:
      return state;
  }
};

export default moviesReducer;
