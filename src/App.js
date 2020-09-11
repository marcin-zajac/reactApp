import React from "react";
import "./styles.css";
import rootReducer from "./reducers";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(movieActions.add("RAMBO V"))
store.dispatch({ type: "ADD_MOVIE", movie: "Rambo III" });
store.dispatch({ type: "DELETE_MOVIE", movie: "RAMBO I" });
store.dispatch({ type: "ADD_ACTOR", actor: "Stallone" });
store.dispatch({ type: "DELETE_ACTOR", actor: "Atkinson" });
console.log(store.getState());

export default function App() {
  return (
    <div className="App">
      <wrappeer>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </wrappeer>
    </div>
  );
}
