import rootReducer from "./reducers";
import { createStore } from "redux";
// import { movieActions } from "./app/movies/duck";
// import { actorActions } from "./app/actors/duck";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
