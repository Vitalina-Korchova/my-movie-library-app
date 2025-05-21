import { useDispatch, useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../store/movie/movie.api";
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
  //для демонстрації роблю 10 фільмів які будуть вдразу в моїй бібліотеці
  const { data, isLoading, error } = useGetMoviesQuery("Pirates");
  const dispatch = useDispatch();
  const isInitialized = useSelector(
    (state: TypeRootState) => state.movieLibrary.isInitializedMovies
  );

  //заповнення головного масиву фільмів
  useEffect(() => {
    if (!isInitialized && data && Array.isArray(data)) {
      data.forEach((movie: any) => {
        dispatch(addToLibrary({ id: movie.imdbID }));
      });
      dispatch(setInitialized());
    }
  }, [data, dispatch, isInitialized]);
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
          <MovieObjectLibrary key={movieId.id} id={movieId.id} />
        ))}
      </div>
    </>
  );
}
