import types from "./types";

const add = (item) => ({
  type: types.ADD_ACTOR,
  item
});

const del = (item) => ({
  type: types.DELETE_ACTOR,
  item
});

const reset = (item) => ({
  type: types.RESTET_ACTORS,
  item
});

export default {
  add,
  del,
  reset
};
