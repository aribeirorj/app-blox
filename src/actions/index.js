import { SET_DATA } from "./actionTypes";
import api from "../services/api";

export const getCourseUnit = () => {
  debugger;
  return (dispatch) => {
    const data = api
      .get(
        `weather?lat=${"coords.latitude"}&lon=${"coords.longitude"}&mode=json&units=metric&appid=${"process.env.REACT_APP_API_KEY"}`
      )
      .then((resp) => {
        // fn(resp);
        return resp.data;
      });
    dispatch({ type: SET_DATA, data });
  };
};
