import NavPage from "../components/navigation/NavPage";
import FoundMovieObject from "../components/add-movie/FoundMovieObject";
import DetailsMovieObject from "../components/add-movie/DetailsMovieObject";
import { MdManageSearch } from "react-icons/md";
import { AiOutlineSelect } from "react-icons/ai";
import { useState } from "react";
import {
  useGetMovieByIdQuery,
  useGetMoviesQuery,
} from "../store/movie/movie.api";
import { IMovie } from "../store/movie/movie.type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToLibrary,
  checkIsInLibrary,
  removeFromLibrary,
} from "../store/movie/movie.slice";
import { TypeRootState } from "../store/store";

export default function AddMoviePage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState<string>("");

  const dispatch = useDispatch();

  const { data } = useGetMoviesQuery(searchValue);
  const { data: dataId } = useGetMovieByIdQuery(selectedMovieId);

  const movieObjects =
    data?.map((movie) => ({
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      Type: movie.Type,
    })) ?? [];

  const selectedMovieObject: IMovie = {
    imdbID: dataId?.imdbID,
    Poster: dataId?.Poster,
    Title: dataId?.Title,
    Genre: dataId?.Genre,
    Year: dataId?.Year,
    imdbRating: dataId?.imdbRating,
    Runtime: dataId?.Runtime,
    Country: dataId?.Country,
    Plot: dataId?.Plot,
    Type: dataId?.Type,
    Actors: dataId?.Actors,
    Language: dataId?.Language,
  };

  const addMovie = () => {
    dispatch(addToLibrary(selectedMovieObject));
  };
  const removeMovie = () => {
    dispatch(removeFromLibrary({ imdbID: selectedMovieId }));
  };

  const clearAll = () => {
    setSearchValue("");
  };

  const clearSelectedMovie = () => {
    setSelectedMovieId("");
  };

  //перевірка чи є вже фільм обраний в бібліотеці
  const checkingIdInLibrary = useSelector((state: TypeRootState) =>
    checkIsInLibrary(state, selectedMovieId)
  );

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
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div
          className="flex flex-row gap-5 text-white mx-10 my-5 items-start justify-center 
        "
        >
          <div className="bg-neutral-800 p-5  w-2/3 rounded-lg relative">
            <button
              onClick={clearAll}
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 right-4 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>

            <div className="h-[610px] overflow-y-auto mt-8 custom-scrollbar-add-movie">
              {searchValue === "" || data?.length === 0 ? (
                <>
                  <MdManageSearch className="text-[160px] text-yellow-400 text-center m-auto" />
                  <h1 className="text-4xl text-yellow-400 font-bold text-center my-5">
                    No result
                  </h1>
                </>
              ) : (
                <>
                  {movieObjects.map((movie, index) => {
                    return (
                      <FoundMovieObject
                        key={index}
                        imgUrl={movie.Poster}
                        title={movie.Title}
                        year={movie.Year}
                        type={movie.Type}
                        imdbID={movie.imdbID}
                        onSelect={(id) => setSelectedMovieId(id)}
                      />
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="bg-neutral-800 p-5 w-full rounded-lg relative h-[680px]">
            <button
              onClick={clearSelectedMovie}
              className="bg-white px-2 py-1 rounded-full flex items-center justify-center 
            absolute top-4 right-4 cursor-pointer  transition-all duration-200 ease-in hover:scale-110"
            >
              <i className="fa-solid fa-xmark text-lg text-black "></i>
            </button>

            {selectedMovieId === "" ? (
              <>
                <AiOutlineSelect className="text-[140px] text-yellow-400 text-center m-auto mt-14" />
                <h1 className="text-4xl text-yellow-400 font-bold text-center my-5">
                  No selected movie
                </h1>
              </>
            ) : (
              <>
                <DetailsMovieObject
                  poster={selectedMovieObject.Poster}
                  title={selectedMovieObject.Title}
                  genres={selectedMovieObject.Genre}
                  year={selectedMovieObject.Year}
                  rating={selectedMovieObject.imdbRating}
                  runtime={selectedMovieObject.Runtime}
                  country={selectedMovieObject.Country}
                  plot={selectedMovieObject.Plot}
                  onAddMovie={addMovie}
                  onRemoveMovie={removeMovie}
                  checkingIdInLibrary={checkingIdInLibrary}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
