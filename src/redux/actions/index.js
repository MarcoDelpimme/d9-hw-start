export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const DELETE_JOBS = "DELETE_JOBS";
export const GET_JOBS = "GET_JOBS";

export const addToFavourites = (data) => {
  return {
    type: ADD_FAVOURITES,
    payload: data,
  };
};

export const deleteJobs = (i) => {
  return {
    type: DELETE_JOBS,
    payload: i,
  };
};

export const getJobs = (query) => {
  return (dispatch, getState) => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

    fetch(baseEndpoint + query)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore");
        }
      })
      .then(({ data }) => {
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
};
