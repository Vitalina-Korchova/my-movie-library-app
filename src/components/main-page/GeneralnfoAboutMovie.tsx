import { MdPlayArrow } from "react-icons/md";
import { Link } from "react-router-dom";
import { IMovie } from "../../store/movie/movie.type";

export default function GeneralInfoMovie({
  imdbID,
  Title,
  Genre,
  Year,
  imdbRating,
  Runtime,
  Plot,
}: IMovie) {
  return (
    <>
      <div className="z-10 flex flex-col gap-3.5 ms-10 mb-10">
        <span className="text-white font-semibold text-5xl max-w-[870px]">
          {Title}
        </span>
        <div className="flex flex-row gap-1 text-white text-sm">
          <span>{Genre} |</span>
          <span>{Year}</span>
          <span>| General rating: {imdbRating} | </span>
          <span>{Runtime}</span>
        </div>
        <span className="text-sm text-white max-w-[450px]">{Plot}</span>
        <Link to={`/movie/${imdbID}`}>
          <button
            className="text-black bg-yellow-400 py-2.5 px-3 flex justify-start self-start
          font-semibold rounded-lg text-sm items-center cursor-pointer  hover:bg-amber-400"
          >
            <MdPlayArrow className="text-2xl me-1" />
            Show me
          </button>
        </Link>
      </div>
    </>
  );
}
