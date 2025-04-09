import NavPage from "../components/navigation/NavPage";
export default function AddMoviePage() {
  return (
    <>
      <div className="flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <input
          className="min-w-72 border-[1px] border-gray-400 text-white rounded-xl 
          p-1.5 mx-10 my-3 h-12 outline-none focus:border-yellow-400
             hover:border-yellow-400 "
          type="text"
          id="searchMovieAdd"
          placeholder="Add movie by title..."
          autoComplete="off"
        />
        <div className="flex flex-row gap-5 text-white mx-10 my-5 items-center justify-center">
          <div className="bg-neutral-800 p-5  w-2/3 rounded-lg relative">
            <button
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 left-11/12 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>

            <h1>No result</h1>
          </div>
          <div className="bg-neutral-800 p-5 w-full rounded-lg relative">
            <button
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 left-11/12 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>
            <h1>No result</h1>
          </div>
        </div>
      </div>
    </>
  );
}
