import { FaRegStar, FaStar } from "react-icons/fa";
import { IMovie } from "../../store/movie/movie.type";

type MovieInfoSelected = {
  poster: string | undefined;
  title: string | undefined;
  genres: string[] | undefined;
  year: number | undefined;
  rating: number | undefined;
  runtime: string | undefined;
  country: string | undefined;
  plot: string | undefined;
  onAddMovie: () => void;
  onRemoveMovie: () => void;
  checkingIdInLibrary: boolean;
  selectedCount: number | 0;
  onClickStars: (index: number) => void;
  movieFoundInLibrary: IMovie | undefined;
};

export default function DetailsMovieObject({
  poster,
  title,
  genres,
  year,
  rating,
  runtime,
  country,
  plot,
  onAddMovie,
  onRemoveMovie,
  checkingIdInLibrary,
  selectedCount,
  onClickStars,
  movieFoundInLibrary,
}: MovieInfoSelected) {
  const userRating = movieFoundInLibrary?.userRating;

  const ratingStars: number = !checkingIdInLibrary
    ? selectedCount
    : userRating ?? 0;
  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row rounded-lg ">
          <img
            src={poster}
            alt=""
            className="rounded-lg w-32 h-60 md:w-48 md:h-auto shadow-md shadow-black"
          />
          <div className="px-5 flex flex-col gap-5">
            <span className="font-bold text-wrap text-lg md:text-2xl">
              {title}
            </span>
            <div>
              <span className="text-xs md:text-base font-medium">
                {year} year
              </span>
              <span className="text-xs md:text-base font-medium">
                • {runtime}
              </span>
            </div>
            <span className="text-xs md:text-base  text-gray-500">
              {genres}
            </span>
            <span className="text-xs md:text-base text-gray-500 ">
              {country}
            </span>
            <span className="text-xs md:text-base  text-gray-500">
              IMDb Rating:{" "}
              <span className="text-white font-medium">{rating} / 10</span>
            </span>
          </div>
        </div>
        <span className="font-bold text-xl my-4 text-center">My rating</span>
        <div
          className="flex flex-row gap-2 text-4xl text-yellow-400 py-5 justify-center items-center
         bg-neutral-700/35 rounded-lg border-[1px] border-neutral-700 shadow-lg shadow-neutral-800"
        >
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              onClick={() => onClickStars(index)}
              className="cursor-pointer"
            >
              {index < ratingStars ? (
                <FaStar className=" size-9 max-[624px]:size-6 max-[480px]:size-4" />
              ) : (
                <FaRegStar className=" size-9 max-[624px]:size-6 max-[480px]:size-4" />
              )}
            </div>
          ))}
        </div>
        <span className="mt-6 text-xs md:text-base">{plot}</span>

        {!checkingIdInLibrary ? (
          <>
            <button
              onClick={onAddMovie}
              className=" text-black bg-yellow-400 py-2.5 px-3 flex justify-center items-center
          font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-amber-400"
            >
              Add to my library
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onRemoveMovie}
              className=" text-black bg-red-400 py-2.5 px-3 flex justify-center items-center
          font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-red-500"
            >
              Remove from library
            </button>
          </>
        )}
      </div>
    </>
  );
}
