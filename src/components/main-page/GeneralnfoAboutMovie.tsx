import { Link } from "react-router-dom";
import { IMovie } from "../../store/movie/movie.type";
import { FaLongArrowAltRight } from "react-icons/fa";

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
        <span
          className="text-white font-semibold text-5xl max-w-[870px]
          max-[465px]:pe-5 max-[465px]:text-2xl"
        >
          {Title}
        </span>
        <div className="flex flex-row gap-1 text-white text-sm max-md:text-xs max-[465px]:flex-col max-[465px]:gap-2">
          <span
            className="text-yellow-400 border-[1px] border-yellow-400 rounded-lg px-2 
          w-fit "
          >
            {Genre}
          </span>
          <div className="flex flex-row gap-1">
            <span className="text-yellow-400 border-[1px] border-yellow-400 rounded-lg px-2 w-fit ">
              {Year}
            </span>
            <span className="text-yellow-400 border-[1px] border-yellow-400 rounded-lg px-2 w-fit ">
              General rating: {imdbRating}
            </span>
            <span className="text-yellow-400 border-[1px] border-yellow-400 rounded-lg px-2 w-fit ">
              {Runtime}
            </span>
          </div>
        </div>
        <span
          className="text-sm font-medium text-white max-w-[450px] pe-5 max-[465px]:text-sm
         "
        >
          {Plot}
        </span>
        <Link to={`/movie/${imdbID}`}>
          <button
            className="text-yellow-400 bg-transparent border-[1px] border-yellow-400 p-2
           rounded-md  cursor-pointer hover:text-black hover:bg-yellow-400 
           "
          >
            <div className="flex flex-row gap-3 items-center">
              <span className="font-semibold text-sm">Show me</span>
              <FaLongArrowAltRight className="  text-lg " />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}
