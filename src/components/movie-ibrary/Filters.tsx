import { FaFilter } from "react-icons/fa";
import Input from "../Input";
import DropdownMenu from "./components/DropdownMenu";

type FilterData = {
  title: string | undefined;
  setTitle: (val: string) => void;
  year: string | undefined;
  setYear: (val: string) => void;
  genre: string | null;
  setGenre: (val: string | null) => void;
  actor: string | undefined;
  setActor: (val: string) => void;
  country: string | undefined;
  setCountry: (val: string) => void;
  clearFilters: () => void;
};

export default function Filters({
  title,
  setTitle,
  year,
  setYear,
  genre,
  setGenre,
  actor,
  setActor,
  country,
  setCountry,
  clearFilters,
}: FilterData) {
  return (
    <>
      <div
        className="flex items-start p-7 space-x-5 justify-center rounded-xl mx-12 bg-neutral-900/60 
      border-[1px] border-neutral-800 shadow-lg shadow-stone-900"
      >
        {/* Desktop version */}
        <div className="hidden lg:block">
          <div className="flex flex-col gap-4 xl:flex-row ">
            <div>
              <Input
                value={title}
                setValue={setTitle}
                id="searchByTitle"
                placeholder="Search by title..."
                className="w-full xl:min-w-72"
              />
            </div>
            <div className="flex flex-row gap-4">
              <Input
                value={year}
                setValue={setYear}
                id="searchByYear"
                placeholder="Search by year"
              />

              <DropdownMenu value={genre} changeValue={setGenre} />

              <Input
                value={actor}
                setValue={setActor}
                id="searchByActors"
                placeholder="Search by actors"
              />
              <Input
                value={country}
                setValue={setCountry}
                id="searchByCountry"
                placeholder="Search by country"
              />

              <button
                onClick={clearFilters}
                className="text-yellow-400 bg-transparent py-2.5 h-10 px-3 flex justify-start self-start text-sm border-[1px] border-yellow-400
                        font-medium rounded-lg items-center cursor-pointer hover:bg-yellow-400 hover:text-black"
              >
                Clear
                <i className="fa-solid fa-xmark ps-3 text-lg"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="block lg:hidden">
          <div className="flex flex-col gap-4 ">
            <Input
              value={title}
              setValue={setTitle}
              id="searchByTitle"
              placeholder="Search by title..."
              className="w-full "
            />
            <button
              className="bg-yellow-400  rounded-md p-1 w-full cursor-pointer hover:bg-transparent
             hover:text-yellow-400 border-[1px] border-yellow-400"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <span className="font-semibold">Filters</span>
                <FaFilter />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
