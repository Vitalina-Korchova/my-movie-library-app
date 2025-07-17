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
        className=" cursor-pointer border-[1px] border-white rounded-lg shadow-sm shadow-white  relative"
      >
        <img src={imgUrl} alt="" className="w-40 h-52 rounded-lg " />
        <div className="bg-black/55 w-40 h-20 backdrop-blur-md absolute bottom-0 left-0 rounded-lg ">
          <div className="flex flex-col gap-1 text-[10px] p-2">
            <span className="font-bold ">{title}</span>
            <div className="space-x-4">
              <span>{year}</span>
              <span>Type: {type}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
