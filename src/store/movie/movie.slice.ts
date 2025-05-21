import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovieId, MovieLibraryState } from "./movie.type";

import { TypeRootState } from "../store";

const initialState: MovieLibraryState = {
  library: [],
  isInitializedMovies: false, //тільки для демонстрації щоб відразу показувалось 10 фільмів
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
    removeFromLibrary: (state, action: PayloadAction<IMovieId>) => {
      state.library = state.library.filter((m) => m.id !== action.payload.id);
    },

    clearLibrary: (state) => {
      state.library = [];
    },
    setInitialized: (state) => {
      //для демонстрації
      state.isInitializedMovies = true;
    },
  },
});

export const { addToLibrary, removeFromLibrary, clearLibrary, setInitialized } =
  movieLibrarySlice.actions;
export default movieLibrarySlice.reducer;

//отримати всі елементи
export const selectLibrary = (state: TypeRootState) =>
  state.movieLibrary.library;

// селектор для перевірки наявності фільму за id
export const checkIsInLibrary = (
  state: TypeRootState,
  movieId: string
): boolean => {
  return state.movieLibrary.library.some((m) => m.id === movieId);
};
