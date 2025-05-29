import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, MovieLibraryState } from "./movie.type";

import { TypeRootState } from "../store";

const initialState: MovieLibraryState = {
  library: [],
  isInitializedMovies: false, //тільки для демонстрації щоб відразу показувалось 10 фільмів
};

export const movieLibrarySlice = createSlice({
  name: "movieLibrary",
  initialState,
  reducers: {
    addToLibrary: (state, action: PayloadAction<IMovie>) => {
      const exists = state.library.some(
        (m) => m.imdbID === action.payload.imdbID
      );
      if (!exists) {
        state.library.push(action.payload);
      }
    },
    removeFromLibrary: (state, action: PayloadAction<IMovie>) => {
      state.library = state.library.filter(
        (m) => m.imdbID !== action.payload.imdbID
      );
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
  return state.movieLibrary.library.some((m) => m.imdbID === movieId);
};

//витяг за айді всю інформацію про конкретний об'єкт
export const getMovieFromLibraryById = (
  state: TypeRootState,
  movieId: string
): IMovie | undefined => {
  return state.movieLibrary.library.find((m) => m.imdbID === movieId);
};
