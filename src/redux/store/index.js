import { combineReducers, configureStore } from "@reduxjs/toolkit";

import mainReducer from "../reducers/favourite";
import jobList from "../reducers/jobList";

const allReducer = combineReducers({
  favState: mainReducer,
  jobList: jobList,
});

const store = configureStore({
  reducer: allReducer,
});

export default store;
