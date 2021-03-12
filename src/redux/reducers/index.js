import courseReducer from "../../views/Dashboard/dashBoardReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  courseState: courseReducer,
});
