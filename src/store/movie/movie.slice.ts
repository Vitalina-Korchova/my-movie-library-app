import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieId, MovieLibraryState } from "./movie.type";

const initialState: MovieLibraryState = {
  library: [],
};

export const movieLibrarySlice = createSlice({
  name: "movieLibrary",
  initialState,
  reducers: {
    addToLibrary: (state, action: PayloadAction<IMovieId>) => {
      const exists = state.library.some((m) => m.id === action.payload.id);
      if (!exists) {
        state.library.push(action.payload);
      }
    },
    removeFromLibrary: (state, action: PayloadAction<string>) => {
      state.library = state.library.filter((m) => m.id !== action.payload);
    },
    clearLibrary: (state) => {
      state.library = [];
    },
  },
});

export const { addToLibrary, removeFromLibrary, clearLibrary } =
  movieLibrarySlice.actions;
export default movieLibrarySlice.reducer;
