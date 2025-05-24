import { IMovie } from "../../../store/movie/movie.type";

export default function MovieObjectLibrary({ imdbID, Title, Poster }: IMovie) {
  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="cursor-pointer pb-3 flex flex-col gap-1 items-center  justify-content w-44 ">
          <img
            src={Poster}
            alt=""
            className="w-36 h-48 rounded-lg mb-3 transition-all duration-300 hover:scale-110"
          />
          <span className="text-white font-bold w-36 break-words text-center">
            {Title}
          </span>
        </div>
      </div>
    </>
  );
}
