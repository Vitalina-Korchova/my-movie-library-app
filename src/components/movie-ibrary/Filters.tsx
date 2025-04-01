import { useState } from "react";

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="m-7 flex flex-row space-x-5 text-base  relative">
        <input
          className="border-[1px] border-gray-400 text-white rounded-xl p-1.5 h-12"
          type="text"
          id="searchByTitle"
          placeholder="Search by Title"
        />
        <input
          className="border-[1px] border-gray-400 text-white rounded-xl p-1.5 h-12"
          type="text"
          id="searchByYear"
          placeholder="Search by Year"
        />
        <div className=" flex flex-col gap-0.5 ">
          <div className="absolute">
            <button
              id="searchByGenres"
              onClick={toggleDropdown}
              className="  text-black w-[182px]  h-12 mb-1 bg-yellow-400 font-medium rounded-lg px-5 py-2.5 text-center flex justify-between items-center
             "
              type="button"
            >
              Genres
              <i className="fa fa-caret-down ps-3"></i>
            </button>

            {isOpen && (
              <div
                id="dropdown"
                className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44
                 dark:bg-gray-700 "
              >
                <div className="max-h-40 overflow-y-auto">
                  {arrGenres.map((genre, index) => (
                    <span
                      key={index}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
