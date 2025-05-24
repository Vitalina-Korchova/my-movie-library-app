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
      <div className="flex items-start p-7 space-x-5 justify-center">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 min-w-72 border-[1px] border-gray-400 text-white rounded-xl 
          p-1.5 h-12 outline-none focus:border-yellow-400
             hover:border-yellow-400 "
          type="text"
          id="searchByTitle"
          placeholder="Search by title..."
          autoComplete="off"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className=" flex-1 max-w-52 border-[1px] border-gray-400 text-white 
          rounded-xl p-1.5 h-12 w-36 outline-none focus:border-yellow-400 hover:border-yellow-400"
          type="text"
          id="searchByYear"
          placeholder="Search by year"
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
          placeholder="Search by actors"
          autoComplete="off"
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className=" flex-1 max-w-[450px]  border-[1px] border-gray-400 text-white 
          rounded-xl p-1.5 h-12 outline-none focus:border-yellow-400 hover:border-yellow-400"
          type="text"
          id="searchByCountry"
          placeholder="Search by country"
          autoComplete="off"
        />
        <button
          onClick={clearFilters}
          className="text-black bg-yellow-400 py-2.5 h-12 px-3 flex justify-start self-start
                        font-medium rounded-xl items-center cursor-pointer hover:bg-amber-400"
        >
          Clear
          <i className="fa-solid fa-xmark ps-3 text-lg"></i>
        </button>
      </div>
    </>
  );
}
