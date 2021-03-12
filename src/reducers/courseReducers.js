import { SET_DATA } from "../actions/actionTypes";

const initialState = { courseUnit: "" };

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, courseUnit: action.data };
    default:
      return state;
  }
};
