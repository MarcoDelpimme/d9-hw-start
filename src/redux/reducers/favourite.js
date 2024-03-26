import { ADD_FAVOURITES, DELETE_JOBS } from "../actions";

const initialState = {
  content: [],
};

const favRedoucer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVOURITES:
      return {
        ...state,

        content: state.content.concat(action.payload),
      };

    case DELETE_JOBS:
      return {
        ...state,

        content: state.content.filter((favJob, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default favRedoucer;
