import { SET_DATA } from "../../redux/actionTypes/actionTypes";

export function setCourseUnit(data) {
  return {
    type: SET_DATA,
    payload: data,
  };
}
