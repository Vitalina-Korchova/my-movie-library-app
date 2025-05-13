import { useGetMoviesQuery } from "../../store/movie/movie.api";
import MovieObjectFilter from "./components/MovieObjectFilter";

interface IMovieLibrary {
  id: string;
  title: string;
  image: string;
}

export default function ObjectContainer() {
  const { data, isLoading, error } = useGetMoviesQuery("Man");

  const movies: IMovieLibrary[] =
    data?.map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      image: movie.Poster,
    })) || [];

  // console.log(movies);

  return (
    <>
      <div className="m-7 flex flex-row gap-16 flex-wrap items-start justify-center">
        {isLoading && <div className="text-white text-xl">Loading...</div>}

        {error && (
          <div className="text-red-500 text-xl">
            Error while loading movies!
          </div>
        )}

        {!isLoading && !error && movies.length > 0 && (
          <>
            {movies.map((item, index) => (
              <MovieObjectFilter
                key={index}
                pathImg={item.image}
                title={item.title}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
