import NavPage from "../components/navigation/NavPage";
import GeneralInfoMovie from "../components/main-page/GeneralnfoAboutMovie";
import Slider from "../components/main-page/Slider";
import {
  useGetMovieByIdQuery,
  useGetMoviesHomePageQuery,
} from "../store/movie/movie.api";
import { IMovie } from "../store/movie/movie.type";
import { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { TypeRootState } from "../store/store";
import { setShowedPopUpMainPage } from "../store/movie/movie.slice";
export default function MainPage() {
  const [active, setActive] = useState<number>(4);
  const [activeMovieId, setActiveMovieId] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

  //запити на витяг 20 фільмів апі
  const {
    data: data1,
    isLoading: loading,
    error: error,
  } = useGetMoviesHomePageQuery({
    search: "Man",
    page: 1,
  });

  const { data: data2 } = useGetMoviesHomePageQuery({
    search: "Dark",
    page: 1,
  });

  //формування масиву з 20 фільмів айді і фото
  const movies: IMovie[] = [...(data1 || []), ...(data2 || [])].map(
    (movie: IMovie) => ({
      //виправити
      imdbID: movie.imdbID,
      Poster: movie.Poster,
    })
  );

  //встановлення активного айді
  useEffect(() => {
    if (movies.length > 0) {
      const activeMovie = movies[active % movies.length];
      if (activeMovie.imdbID) {
        setActiveMovieId(activeMovie.imdbID);
      }
    }
  }, [active, movies]);

  const { data: dataId } = useGetMovieByIdQuery(activeMovieId);

  const movieObject: IMovie = {
    imdbID: dataId?.imdbID,
    Poster: dataId?.Poster
      ? `${dataId.Poster.split("_")[0]}_SX600.jpg`
      : undefined,
    Title: dataId?.Title,
    Genre: dataId?.Genre,
    Year: dataId?.Year,
    imdbRating: dataId?.imdbRating,
    Runtime: dataId?.Runtime,
    Plot: dataId?.Plot,
  };

  const dispatch = useDispatch();
  const isShowedPopUp = useSelector(
    (state: TypeRootState) => state.movieLibrary.isShowedPopUpMain
  );

  useEffect(() => {
    if (!isShowedPopUp) {
      const timeout = setTimeout(() => {
        setShowPopup(true);
        dispatch(setShowedPopUpMainPage());
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [dispatch, isShowedPopUp]);

  const titlePopUp = `Demonstration project`;
  const descriptionPopUp = ` This project was made without local storage. When you refresh the
            page the entire movie library, filters, and ratings will return to
            their original states!`;
  return (
    <>
      {showPopup && (
        <PopUp
          onClose={() => setShowPopup(false)}
          title={titlePopUp}
          description={descriptionPopUp}
        />
      )}
      <div className="relative w-full flex flex-col min-h-screen z-0 bg-black">
        <div
          className="absolute inset-y-0 right-0 w-1/2  bg-cover bg-center"
          style={{
            backgroundImage: movieObject.Poster
              ? `url(${movieObject.Poster})`
              : "none",
            backgroundColor: !movieObject.Poster ? "#333" : "transparent",
          }}
        ></div>
        <div
          className="absolute inset-y-0 left-0 w-1/2  bg-cover bg-center scale-x-[-1]"
          style={{
            backgroundImage: movieObject.Poster
              ? `url(${movieObject.Poster})`
              : "none",
            backgroundColor: !movieObject.Poster ? "#333" : "transparent",
          }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/50"></div>

        <NavPage />

        <GeneralInfoMovie
          imdbID={movieObject.imdbID}
          Title={movieObject.Title}
          Genre={movieObject.Genre}
          Year={movieObject.Year}
          imdbRating={movieObject.imdbRating}
          Runtime={movieObject.Runtime}
          Plot={movieObject.Plot}
        />

        {!loading && !error && movies.length > 0 && (
          <Slider
            movies={movies}
            activeSlideIndex={active}
            onSlideChange={(newIndex) => setActive(newIndex)}
          />
        )}
      </div>
    </>
  );
}
