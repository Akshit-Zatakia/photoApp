import axios from "axios";
import { GET_RECENT_API } from "../../config";
import { GET_IMAGES } from "../types";

export const getRecentImages = (pageNo) => async (dispatch, getState) => {
  console.log(pageNo);
  const api = GET_RECENT_API(pageNo);
  console.log(api);
  axios
    .get(api)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_IMAGES,
        payload: res.data.photos.photo,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
