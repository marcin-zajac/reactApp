import types from "./types";

const add = (item) => ({
  type: types.ADD_MOVIE,
  item
});

const del = (item) => ({
  type: types.DELETE_MOVIE,
  item
});

const reset = (item) => ({
  type: types.RESTET_MOVIES,
  item
});

export default {
  add,
  del,
  reset
};
