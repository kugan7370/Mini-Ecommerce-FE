import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourite: [],
};

const FavouriteSlicer = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourite.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourite = state.favourite.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addFavourite, removeFavourite } = FavouriteSlicer.actions;

export default FavouriteSlicer.reducer;
