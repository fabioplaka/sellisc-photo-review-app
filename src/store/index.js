import { combineReducers } from "redux";
import { fetchPostSlice } from "./images";
import { fetchImagesListSlice } from "./imagesList";

const rootReducer = combineReducers({
  photo: fetchPostSlice.reducer,
  imagesList: fetchImagesListSlice.reducer,
});

export default rootReducer;
