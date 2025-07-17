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
import { Link } from "react-router-dom";

type ObjectContainerProps = {
  title: string;
  year: string;
  genre: string | null;
  actor: string;
  country: string;
};

export default function ObjectContainer({
  title,
  year,
  genre,
  actor,
  country,
}: ObjectContainerProps) {
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

  const moviesInLibrary = library.map((movie) => ({
    imdbID: movie.imdbID,
    Poster: movie.Poster,
    Title: movie.Title,
    Year: movie.Year,
    Genre: movie.Genre,
    Actor: movie.Actors,
    Country: movie.Country,
  }));

  const filteredMovies = moviesInLibrary.filter((movie) => {
    const matchesTitle = title
      ? movie.Title?.toLowerCase().includes(title.toLowerCase())
      : true;
    const matchesYear = year
      ? movie.Year?.toString().includes(year.toLowerCase())
      : true;
    const matchesGenre = genre
      ? movie.Genre?.map((g) => g.trim().toLowerCase()).some((g) =>
          g.includes(genre.toLowerCase())
        )
      : true;

    const matchesActor = actor
      ? movie.Actor?.map((a) => a.trim().toLowerCase()).some((a) =>
          a.includes(actor.toLowerCase())
        )
      : true;

    const matchesCountry = country
      ? movie.Country?.toLowerCase().includes(country.toLowerCase())
      : true;

    return (
      matchesTitle &&
      matchesYear &&
      matchesGenre &&
      matchesActor &&
      matchesCountry
    );
  });

  return (
    <>
      <div className="my-9  mx-9 flex flex-row flex-wrap gap-6 justify-center">
        {isLoading && <div className="text-white text-xl">Loading...</div>}

        {error && (
          <div className="text-red-500 text-xl">
            Error while loading movies!
          </div>
        )}
        {filteredMovies.map((m) => (
          <Link key={m.imdbID} to={`/my-movie-library-app/movie/${m.imdbID}`} className="block">
            <MovieObjectLibrary
              imdbID={m.imdbID}
              Poster={m.Poster}
              Title={m.Title}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
