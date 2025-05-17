interface FoundMvieObjectProps {
  imgUrl: string | undefined;
  title: string | undefined;
  year: number | undefined;
  type: string | undefined;
}

export default function FoundMovieObject({
  imgUrl,
  title,
  year,
  type,
}: FoundMvieObjectProps) {
  return (
    <>
      <div className="py-6 px-3 flex flex-row space-x-5 cursor-pointer items-center">
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
