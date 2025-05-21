import { useGetMovieByIdQuery } from "../../../store/movie/movie.api";
import { IMovieId } from "../../../store/movie/movie.type";

type IMovieLibrary = {
  title: string | undefined;
  poster: string | undefined;
};

export default function MovieObjectLibrary(movieId: IMovieId) {
  const { data } = useGetMovieByIdQuery(movieId.id);
  const movie: IMovieLibrary = {
    title: data?.Title,
    poster: data?.Poster,
  };

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="cursor-pointer pb-3 flex flex-col gap-1 items-center  justify-content w-44 ">
          <img
            src={movie.poster}
            alt=""
            className="w-36 h-48 rounded-lg mb-3 transition-all duration-300 hover:scale-110"
          />
          <span className="text-white font-bold w-36 break-words text-center">
            {movie.title}
          </span>
        </div>
      </div>
    </>
  );
}
