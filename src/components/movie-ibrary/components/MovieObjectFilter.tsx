import { IMovie } from "../../../store/movie/movie.type";

export default function MovieObjectLibrary({ Title, Poster }: IMovie) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="cursor-pointer pb-3 flex flex-col gap-1 items-center  justify-content w-44 ">
          <img
            src={Poster}
            alt=""
            className="w-full h-full rounded-lg mb-3 transition-all duration-300 hover:scale-110"
          />
          <span className="text-white font-semibold w-40 break-words text-start text-xs">
            {Title}
          </span>
        </div>
      </div>
    </>
  );
}
