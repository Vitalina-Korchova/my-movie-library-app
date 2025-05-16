import { MdPlayArrow } from "react-icons/md";

type MovieInfoIntro = {
  title: string | undefined;
  genres: string[] | undefined;
  year: number | undefined;
  rating: number | undefined;
  runtime: string | undefined;
  plot: string | undefined;
};
export default function GeneralInfoMovie({
  title,
  genres,
  year,
  rating,
  runtime,
  plot,
}: MovieInfoIntro) {
  return (
    <>
      <div className="z-10 flex flex-col gap-3.5 ms-10 mb-10">
        <span className="text-white font-semibold text-5xl max-w-[870px]">
          {title}
        </span>
        <div className="flex flex-row gap-1 text-white text-sm">
          <span>{genres} |</span>
          <span>{year}</span>
          <span>| General rating: {rating} | </span>
          <span>{runtime}</span>
        </div>
        <span className="text-sm text-white max-w-[450px]">{plot}</span>
        <button
          className="text-black bg-yellow-400 py-2.5 px-3 flex justify-start self-start
          font-semibold rounded-lg text-sm items-center cursor-pointer  hover:bg-amber-400"
        >
          <MdPlayArrow className="text-2xl me-1" />
          Show me
        </button>
      </div>
    </>
  );
}
