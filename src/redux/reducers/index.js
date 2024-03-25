const initialState = {
  favState: {
    content: [],
  },
};

const mainReducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVOURITES":
      return {
        ...state,

        favState: {
          ...state.favState,
          content: state.favState.content.concat(action.payload),
        },
      };

    case "DELETE_JOBS":
      return {
        ...state,
        favState: {
          ...state.favState,
          content: state.favState.content.filter((favJob, i) => i !== action.payload),
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
