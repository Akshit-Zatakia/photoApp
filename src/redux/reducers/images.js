import { GET_IMAGES } from "../types";

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
    default:
      return state;
  }
}
