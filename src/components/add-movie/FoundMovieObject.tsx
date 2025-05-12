interface FoundMvieObjectProps {
  imgUrl: string;
  title: string;
  year: string;
  rating: string;
}

export default function FoundMovieObject({
  imgUrl,
  title,
  year,
  rating,
}: FoundMvieObjectProps) {
  return (
    <>
      <div className="py-6 px-3 flex flex-row space-x-5 cursor-pointer">
        <img src={imgUrl} alt="" className="w-16 h-24 rounded-lg" />
        <div className="flex flex-col gap-3">
          <span className="font-bold">{title}</span>
          <span>{year}</span>
          <span>General rating: {rating} / 10</span>
        </div>
      </div>
      <hr className="text-neutral-600" />
    </>
  );
}
