import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducers";
import DataReducers from "./DataReducers";
import CareersReducers from "./CareersReducers";


const rootReducer = combineReducers({
  auth: authReducer,
  blog: DataReducers,
  jobs:CareersReducers,
});

export default rootReducer;
