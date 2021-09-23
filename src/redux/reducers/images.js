import { EMPTY_IMAGES, GET_IMAGES, SAVE_HISTORY } from "../types";

// intitial state for images
const initialState = {
  page: 0,
  photos: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_IMAGES:
      return {
        ...state,
        page: state.page + 1,
        photos: [...state.photos, ...payload],
      };
    case EMPTY_IMAGES:
      return {
        ...state,
        page: 0,
        photos: [],
      };

    default:
      return state;
  }
}
