import actions from "./actions";
const url = "https://jsonplaceholder.typicode.com/todos/";

const fetchMovies = async () => {
  const response = await fetch(url, { method: "GET" });
  const json = await response.json();

  return json;
};

export const getAllMovies = () => async (dispatch) => {
  const movies = await fetchMovies();

  movies.map((movie) => dispatch(actions.add(movie.title)));
};
