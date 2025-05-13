import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { movieApi } from "./movie/movie.api";
import movieLibraryReducer from "./movie/movie.slice";

const rootReducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
  movieLibrary: movieLibraryReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
