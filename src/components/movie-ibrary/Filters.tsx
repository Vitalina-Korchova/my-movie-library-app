import { useState } from "react";
import DropdownMenu from "./components/DropdownMenu";

export default function Filters() {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);
  const [actor, setActor] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const clearFilters = () => {
    setTitle("");
    setYear("");
    setGenre(null);
    setActor("");
    setCountry("");
  };

  return (
    <>
      <div className="flex items-start p-7 space-x-5 justify-center">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 min-w-72 border-[1px] border-gray-400 text-white rounded-xl 
          p-1.5 h-12 outline-none focus:border-yellow-400
             hover:border-yellow-400 "
          type="text"
          id="searchByTitle"
          placeholder="Search by Title"
          autoComplete="off"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className=" flex-1 max-w-52 border-[1px] border-gray-400 text-white 
          rounded-xl p-1.5 h-12 w-36 outline-none focus:border-yellow-400 hover:border-yellow-400"
          type="text"
          id="searchByYear"
          placeholder="Search by Year"
          autoComplete="off"
        />
        <DropdownMenu value={genre} changeValue={setGenre} />
        <input
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          className=" flex-1 max-w-[500px] border-[1px] border-gray-400 text-white
           rounded-xl p-1.5 h-12 outline-none focus:border-yellow-400 hover:border-yellow-400"
          type="text"
          id="searchByActors"
          placeholder="Search by Actors"
          autoComplete="off"
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className=" flex-1 max-w-[450px]  border-[1px] border-gray-400 text-white 
          rounded-xl p-1.5 h-12 outline-none focus:border-yellow-400 hover:border-yellow-400"
          type="text"
          id="searchByCountry"
          placeholder="Search by Country"
          autoComplete="off"
        />
        <button
          onClick={clearFilters}
          className="text-black bg-yellow-400 py-2.5 h-12 px-3 flex justify-start self-start
                        font-medium rounded-xl items-center cursor-pointer"
        >
          Clear
          <i className="fa-solid fa-xmark ps-3 text-lg"></i>
        </button>
      </div>
    </>
  );
}
