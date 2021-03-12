import courseReducer from "./courseReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  courseState: courseReducer,
});
