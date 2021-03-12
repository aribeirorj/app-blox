import { courseReducer } from "./courseReducers";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  courseState: courseReducer,
});
