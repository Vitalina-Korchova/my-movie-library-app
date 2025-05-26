import { FaRegStar, FaStar } from "react-icons/fa";

type StarsProps = {
  selectedCount: number;
  onClickStars: (index: number) => void;
};

export default function Stars({ selectedCount, onClickStars }: StarsProps) {
  return (
    <div
      className="flex flex-row gap-2 text-4xl text-yellow-400 py-5 justify-center items-center
      my-5 bg-neutral-700 rounded-lg"
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          onClick={() => onClickStars(index)}
          className="cursor-pointer"
        >
          {index < selectedCount ? <FaStar /> : <FaRegStar />}
        </div>
      ))}
    </div>
  );
}
