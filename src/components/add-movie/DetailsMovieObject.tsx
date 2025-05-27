import Stars from "./Stars";

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
}: MovieInfoSelected) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row rounded-lg ">
          <img src={poster} alt="" className="rounded-lg w-48 " />
          <div className="px-5 flex flex-col gap-5">
            <span className="font-bold text-wrap text-2xl">{title}</span>
            <div>
              <span>{year} year </span>
              <span>• {runtime}</span>
            </div>
            <span>{genres}</span>
            <span>{country}</span>
            <span>IMDb Rating: {rating} / 10</span>
          </div>
        </div>
        <span className="font-bold text-xl my-5 text-center">My rating</span>
        <Stars selectedCount={selectedCount} onClickStars={onClickStars} />
        <div>
          <span>{plot}</span>
        </div>
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
