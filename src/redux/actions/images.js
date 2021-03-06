import axios from "axios";
import { GET_RECENT_API, SEARCH_API } from "../../config";
import { EMPTY_IMAGES, GET_IMAGES, SAVE_HISTORY } from "../types";

// get recent images if search value is not there
// else execute search api
export const getRecentImages =
  (pageNo, search = "") =>
  async (dispatch) => {
    if (search) {
      axios
        .get(SEARCH_API(search, pageNo))
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
    } else {
      axios
        .get(GET_RECENT_API(pageNo))
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
    }
  };

// save the values of search in localstorage
export const saveHistory = (text) => {
  var existing = localStorage.getItem("history");

  existing = existing ? existing.split(",") : [];

  existing.find((e) => {
    if (e !== text) {
      existing.push(text);
    }
  });

  localStorage.setItem("history", existing.toString());
};

// get the values of search from localstorage
export const getHistory = () => {
  var existing = localStorage.getItem("history");

  existing = existing ? existing.split(",") : [];
  return existing;
};

// empty the images from state
export const emptyImages = () => async (dispatch) => {
  dispatch({
    type: EMPTY_IMAGES,
  });
};
