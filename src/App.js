import React from "react";
import "./styles.css";
import MoviesContainer from "./app/movies/components/MoviesContainer";
import MoviesForm from "./app/movies/components/MoviesForm";

export default function App() {
  return (
    <div className="App">
      <MoviesContainer />
      <MoviesForm />
    </div>
  );
}
