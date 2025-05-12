import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Stars() {
  const [selectedCount, setSelectedCount] = useState<number>(0);

  const handleClick = (index: number) => {
    setSelectedCount(index + 1);
  };

  return (
    <div
      className="flex flex-row gap-2 text-4xl text-yellow-400 py-5 justify-center items-center
      my-5 bg-neutral-700 rounded-lg"
    >
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="cursor-pointer"
        >
          {index < selectedCount ? <FaStar /> : <FaRegStar />}
        </div>
      ))}
    </div>
  );
}
