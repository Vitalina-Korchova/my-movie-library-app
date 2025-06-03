import { useParams } from "react-router-dom";
import NavPage from "../components/navigation/NavPage";
import { FaCalendarDay, FaRegStar, FaStar } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { IoMdPerson } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { BiBook } from "react-icons/bi";
import { FaImdb } from "react-icons/fa";
import { useGetMovieByIdQuery } from "../store/movie/movie.api";
import { IMovie } from "../store/movie/movie.type";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import {
  addToLibrary,
  checkIsInLibrary,
  getMovieFromLibraryById,
  removeFromLibrary,
} from "../store/movie/movie.slice";
import { TypeRootState } from "../store/store";
import PopUp from "../components/PopUp";

export default function DetailedInfoMovie() {
  const [selectedCount, setSelectedCount] = useState<number>(0);
  const { id } = useParams<{ id: string }>(); // витягую параметр з URL
  const { data } = useGetMovieByIdQuery(id as string);
  const [showPopup, setShowPopup] = useState(false);

  const dispatch = useDispatch();

  const movieObject: IMovie = {
    imdbID: data?.imdbID,
    Poster:
      data?.Poster && data.Poster !== "N/A"
        ? `${data.Poster.split("_")[0]}_SX600.jpg`
        : "/no_image.png",

    Title: data?.Title,
    Genre: data?.Genre,
    Year: data?.Year,
    imdbRating: data?.imdbRating,
    Runtime: data?.Runtime,
    Plot: data?.Plot,
    Actors: data?.Actors,
    Country: data?.Country,
    Language: data?.Language,
    Type: data?.Type,
    userRating: selectedCount,
  };

  const addMovie = () => {
    dispatch(addToLibrary(movieObject));
  };
  const removeMovie = () => {
    dispatch(removeFromLibrary({ imdbID: id }));
  };

  const checkingIdInLibrary = useSelector((state: TypeRootState) =>
    id ? checkIsInLibrary(state, id) : false
  );

  const handleClickStars = (index: number) => {
    setSelectedCount(index + 1);
  };

  const movieFoundInLibrary = useSelector((state: TypeRootState) =>
    id ? getMovieFromLibraryById(state, id) : undefined
  );

  const userRating = movieFoundInLibrary?.userRating;

  const ratingStars: number = !checkingIdInLibrary
    ? selectedCount
    : userRating ?? 0;

  const titlePopUp = `Help Tip`;
  const descriptionPopUp = `To change a movie's rating, you need to remove the
   current movie from your library, then rate the movie and add it back to your library.`;
  return (
    <>
      {showPopup && (
        <PopUp
          title={titlePopUp}
          description={descriptionPopUp}
          onClose={() => setShowPopup(false)}
        />
      )}
      <div className="flex flex-col bg-stone-900 w-full min-h-screen bg-cover">
        <NavPage />
        <div className="bg-neutral-800 text-amber-50 mx-5 mb-5 rounded-lg p-5 flex justify-between items-center">
          <div className=" w-2/3 flex justify-center items-center self-start flex-col">
            <img
              className="rounded-lg size-2/3"
              src={movieObject?.Poster}
              alt=""
            />

            <span className="text-sm my-4 text-center w-96">
              {movieObject?.Plot}
            </span>
          </div>
          <div className="w-full flex self-start flex-col gap-3">
            <span className="font-bold text-3xl">{movieObject?.Title}</span>
            <span className="text-lg">{movieObject?.Genre}</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <FaCalendarDay className="text-2xl text-yellow-400" />
                <span> {movieObject?.Year} release year</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <IoMdPerson className="text-3xl text-yellow-400" />
                <span className="text-sm">{movieObject?.Actors}</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <IoIosTimer className="text-2xl text-yellow-400" />
                <span>{movieObject?.Runtime}</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <IoLanguage className="text-2xl text-yellow-400" />
                <span>{movieObject?.Language}</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-68">
                <BiWorld className="text-2xl text-yellow-400" />
                <span>{movieObject?.Country}</span>
              </div>
              <div className="flex flex-row gap-3 items-center p-2 bg-neutral-700 rounded-lg w-88">
                <BiBook className="text-2xl text-yellow-400" />
                <span>{movieObject?.Type}</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-3 items-center">
              <FaImdb className="text-5xl text-yellow-400" />
              <span className="text-base">{movieObject?.imdbRating} / 10</span>
            </div>
            <div className="flex flex-row gap-2 items-center mt-4">
              <span className="font-semibold text-xl ">My rating </span>
              <button
                onClick={() => setShowPopup(true)}
                className="cursor-pointer"
              >
                <FaRegQuestionCircle className="text-yellow-400 text-2xl hover:text-yellow-500" />
              </button>
            </div>
            <div
              className="flex flex-row gap-2 text-4xl text-yellow-400 py-5 justify-center items-center
             bg-neutral-700 rounded-lg"
            >
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleClickStars(index)}
                  className="cursor-pointer"
                >
                  {index < ratingStars ? <FaStar /> : <FaRegStar />}
                </div>
              ))}
            </div>
            {!checkingIdInLibrary ? (
              <>
                <button
                  onClick={addMovie}
                  className=" text-black bg-yellow-400 py-2.5 px-3 flex justify-center items-center
                font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-amber-400"
                >
                  Add to my library
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={removeMovie}
                  className=" text-black bg-red-400 py-2.5 px-3 flex justify-center items-center
                font-semibold rounded-lg text-base cursor-pointer w-48 m-auto mt-8 hover:bg-red-500"
                >
                  Remove from library
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
