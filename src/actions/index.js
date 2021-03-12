import { SET_DATA } from "./actionTypes";

export function setCourseUnit(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
