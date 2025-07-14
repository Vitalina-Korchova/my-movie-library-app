import { useState, useEffect, useRef } from "react";

const arrGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Western",
  "Biography",
  "Crime",
  "Documentary",
  "Family",
  "Historical",
  "Musical",
  "War",
  "Animation",
  "Superhero",
  "Psychological",
  "Sports",
  "Noir",
  "Satire",
  "Survival",
  "Paranormal",
  "Steampunk",
  "Cyberpunk",
  "Dystopian",
  "Post-apocalyptic",
  "Martial Arts",
  "Teen",
  "Political",
  "Religious",
  "Tragedy",
  "Urban",
  "Space Opera",
  "Speculative",
  "Dark Comedy",
  "Slice of Life",
  "Magical Realism",
  "Gothic",
  "Espionage",
  "Legal",
  "Military",
  "Music",
  "Road",
  "Epic",
  "Fairy Tale",
  "Coming of Age",
  "Erotic",
  "Travel",
  "Heist",
  "Suspense",
  "Fiction",
  "Non-Fiction",
];

interface DropdownMenuProps {
  value: string | null;
  changeValue: (genre: string) => void;
}

export default function DropdownMenu({
  value,
  changeValue,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectGenre = (genre: string) => {
    changeValue(genre);
    setIsOpen(false);
  };
  return (
    <>
      <div
        className="relative flex flex-col gap-0.5  text-sm"
        ref={dropdownRef}
      >
        <button
          id="searchByGenres"
          onClick={toggleDropdown}
          className="text-black w-[150px] h-10 mb-1 bg-yellow-400 font-medium
                  rounded-lg px-5 py-2.5 text-center flex justify-between items-center cursor-pointer"
          type="button"
        >
          {value || "Genres"}
          <i className="fa fa-caret-down ps-3"></i>
        </button>

        {isOpen && (
          <div
            id="dropdown"
            className="absolute top-full left-0 z-10 bg-black rounded-lg shadow-sm w-36 "
          >
            <div className="max-h-40 overflow-y-auto custom-scrollbar ">
              {arrGenres.map((genre, index) => (
                <span
                  key={index}
                  onClick={() => handleSelectGenre(genre)}
                  className="block text-white  px-4 rounded-lg py-2 cursor-pointer hover:bg-gray-800 hover:text-yellow-400"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
