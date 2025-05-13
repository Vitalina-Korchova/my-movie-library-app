import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, OMDBResponse } from "./movie.type";

export const movieApi = createApi({
  reducerPath: "api/movie",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (build) => ({
    getMovies: build.query<IMovie[], string>({
      query: (search) => `?apikey=f9dc3e10&s=${search}`,
      transformResponse: (response: OMDBResponse) => response.Search || [],
    }),
    getMovieById: build.query<IMovie, string>({
      query: (imdbID) => `?apikey=f9dc3e10&i=${imdbID}`,
    }),
    getMoviesHomePage: build.query<IMovie[], { search: string; page: number }>({
      query: ({ search, page }) => `?apikey=f9dc3e10&s=${search}&page=${page}`,
      transformResponse: (response: OMDBResponse) => response.Search || [],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetMoviesHomePageQuery,
} = movieApi;
