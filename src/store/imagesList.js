import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  images: [],
  processing: false,
  error: "",
};

export const fetchImagesList = createAsyncThunk("imagesList", async (image) => {
  return image;
});

export const fetchImagesListSlice = createSlice({
  name: "fetchImagesListSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchImagesList.pending, (state) => {
      state.processing = true;
    });
    builder.addCase(fetchImagesList.fulfilled, (state, { payload }) => {
      state.processing = false;
      if (!state.images.includes(payload)) {
        state.images = [...state.images, payload];
        state.error = "";
      } else {
        state.error = "The item is already added";
      }
    });
  },
});
