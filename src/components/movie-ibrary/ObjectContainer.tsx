import { useDispatch, useSelector } from "react-redux";
import { useGetMovieByIdQuery } from "../../store/movie/movie.api";
import {
  addToLibrary,
  selectLibrary,
  setInitialized,
} from "../../store/movie/movie.slice";
import { useEffect } from "react";
import MovieObjectLibrary from "./components/MovieObjectFilter";
import { TypeRootState } from "../../store/store";

export default function ObjectContainer() {
  //---------------------------------------------
  //для демонстрації роблю 5 фільмів які будуть вдразу в моїй бібліотеці
  const { data: data1, isLoading, error } = useGetMovieByIdQuery("tt0325980");
  const { data: data2 } = useGetMovieByIdQuery("tt0383574");
  const { data: data3 } = useGetMovieByIdQuery("tt0449088");
  const { data: data4 } = useGetMovieByIdQuery("tt1298650");
  const { data: data5 } = useGetMovieByIdQuery("tt1790809");
  const dispatch = useDispatch();
  const isInitialized = useSelector(
    (state: TypeRootState) => state.movieLibrary.isInitializedMovies
  );

  //заповнення головного масиву фільмів
  useEffect(() => {
    if (!isInitialized && data1 && data2 && data3 && data4 && data5) {
      dispatch(addToLibrary(data1));
      dispatch(addToLibrary(data2));
      dispatch(addToLibrary(data3));
      dispatch(addToLibrary(data4));
      dispatch(addToLibrary(data5));
      dispatch(setInitialized());
    }
  }, [data1, data2, data3, data4, data5, dispatch, isInitialized]);

  //---------------------------------------------

  //головний елмент коду
  const library = useSelector(selectLibrary);
  console.log(library);

  return (
    <>
      <div className="m-7 flex flex-row gap-16 flex-wrap items-start justify-center">
        {isLoading && <div className="text-white text-xl">Loading...</div>}

        {error && (
          <div className="text-red-500 text-xl">
            Error while loading movies!
          </div>
        )}
        {library.map((movieId) => (
          <MovieObjectLibrary key={movieId.imdbID} imdbID={movieId.imdbID} />
        ))}
      </div>
    </>
  );
}
