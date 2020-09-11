import types from "./types";
const initialActors = {
  listName: "Best actors",
  list: ["Joe Dalton", "Bugs Bunny", "RAMBO IV"]
};

const actorsReducer = (state = initialActors, action) => {
  switch (action.type) {
    case types.ADD_ACTOR:
      return { ...state, list: [...state.list, action.actor] };
    case types.DELETE_ACTOR:
      return {
        ...state,
        list: state.list.filter((item) => item !== action.actor)
      };
    case types.RESET_ACTORS:
      return { ...state, list: [] };

    default:
      return state;
  }
};

export default actorsReducer;
