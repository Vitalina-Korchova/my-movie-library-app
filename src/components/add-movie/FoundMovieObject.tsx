interface FoundMvieObjectProps {
  imgUrl: string | undefined;
  title: string | undefined;
  year: number | undefined;
  type: string | undefined;
  imdbID: string | undefined;
  onSelect: (imdbID: string | undefined) => void;
}

export default function FoundMovieObject({
  imgUrl,
  title,
  year,
  type,
  imdbID,
  onSelect,
}: FoundMvieObjectProps) {
  return (
    <>
      <div
        onClick={() => onSelect(imdbID)}
        className="py-6 px-3 flex flex-row space-x-5 cursor-pointer items-center"
      >
        <img src={imgUrl} alt="" className="w-16 h-24 rounded-lg" />
        <div className="flex flex-col gap-3">
          <span className="font-bold">{title}</span>
          <span>{year}</span>
          <span>Type: {type}</span>
        </div>
      </div>
      <hr className="text-neutral-600" />
    </>
  );
}
