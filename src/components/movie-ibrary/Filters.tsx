import { FaFilter } from "react-icons/fa";
import Input from "../Input";
import DropdownMenu from "./components/DropdownMenu";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

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
  const [isVisibleFilterBar, setIsVisibleFilterBar] = useState(false);
  const [isOpenFilters, setIsOpenFilters] = useState(false);
  const [isCloseFilters, setIsCloseFilters] = useState(false);

  const handleOpen = () => {
    setIsOpenFilters(true);
    setTimeout(() => {
      setIsVisibleFilterBar(true);
    }, 10);
  };

  const handleClose = () => {
    setIsCloseFilters(true);
    setIsVisibleFilterBar(false);
    setTimeout(() => {
      setIsCloseFilters(false);
      setIsOpenFilters(false);
    }, 500);
  };

  return (
    <>
      <div
        className="flex  p-7 justify-center rounded-xl mx-9 bg-neutral-900/60 
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
                className="w-full xl:min-w-64 "
              />
            </div>

            <div className="flex flex-row gap-4 ">
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
        <div className="block lg:hidden w-full">
          <div className="flex flex-col gap-4 ">
            <Input
              value={title}
              setValue={setTitle}
              id="searchByTitle"
              placeholder="Search by title..."
              className=" p-2.5"
            />
            <button
              onClick={handleOpen}
              className="bg-yellow-400  rounded-md p-1  cursor-pointer hover:bg-transparent
             hover:text-yellow-400 border-[1px] border-yellow-400"
            >
              <div className="flex flex-row gap-2 items-center justify-center">
                <span className="font-semibold">Filters</span>
                <FaFilter />
              </div>
            </button>
          </div>
        </div>

        {isOpenFilters && (
          <div
            className={`fixed left-0 top-0 z-50 bg-black h-screen rounded-lg border-[1px] border-neutral-600 
                transition-transform duration-500 ease-in-out
                ${
                  isVisibleFilterBar
                    ? isCloseFilters
                      ? "-translate-x-full"
                      : "translate-x-0"
                    : "-translate-x-full"
                }`}
          >
            <div className="flex flex-col gap-4 p-5 ">
              <div className="flex flex-row justify-between items-center mb-4">
                <span className="font-semibold text-yellow-400 text-lg">
                  Filters
                </span>
                <RxCross1
                  onClick={handleClose}
                  className="text-white text-2xl hover:text-yellow-400 cursor-pointer max-[465px]:text-3xl"
                />
              </div>
              <Input
                value={year}
                setValue={setYear}
                id="searchByYear"
                placeholder="Search by year"
                className="p-2.5"
              />

              <DropdownMenu value={genre} changeValue={setGenre} />

              <Input
                value={actor}
                setValue={setActor}
                id="searchByActors"
                placeholder="Search by actors"
                className="p-2.5"
              />
              <Input
                value={country}
                setValue={setCountry}
                id="searchByCountry"
                placeholder="Search by country"
                className="p-2.5"
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
        )}
      </div>
    </>
  );
}
