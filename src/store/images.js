import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPhoto } from "../api/fetApiRequest";

export const initialState = {
  photo: "",
  processing: false,
};

export const fetchPhoto = createAsyncThunk("photo", async () => {
  const response = getPhoto();
  return response;
});

export const removePhoto = createAsyncThunk("removePhoto", async () => {
  return;
});
export const fetchPostSlice = createSlice({
  name: "fetchPostSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.processing = true;
    });
    builder.addCase(fetchPhoto.fulfilled, (state, { payload }) => {
      state.processing = false;
      state.photo = payload.urls.thumb;
    });
    builder.addCase(removePhoto.fulfilled, (state) => {
      state.processing = false;
      state.photo = null;
    });
  },
});
