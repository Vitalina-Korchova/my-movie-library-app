import NavPage from "../components/navigation/NavPage";
import GeneralInfoMovie from "../components/main-page/GeneralnfoAboutMovie";
import Slider from "../components/main-page/Slider";
import { useGetMoviesHomePageQuery } from "../store/movie/movie.api";
import { MovieObjectRecommendation } from "../store/movie/movie.type";
import { useState } from "react";
export default function MainPage() {
  const [active, setActive] = useState<string>("");
  const {
    data: data1,
    isLoading: loading,
    error: error,
  } = useGetMoviesHomePageQuery({
    search: "Pirates",
    page: 1,
  });
  const { data: data2 } = useGetMoviesHomePageQuery({
    search: "Moon",
    page: 2,
  });

  const movies: MovieObjectRecommendation[] = [
    ...(data1 || []),
    ...(data2 || []),
  ].map((movie: any) => ({
    id: movie.imdbID,
    image: movie.Poster,
  }));

  return (
    <>
      <div className="relative w-full flex flex-col min-h-screen z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[url('/kaiser.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[url('/kaiser.jpg')] bg-cover bg-center scale-x-[-1]"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-black/50"></div>

        <NavPage />

        <GeneralInfoMovie />
        {loading && <div className="text-white text-xl">Loading...</div>}
        {error && (
          <div className="text-red-500 text-xl">
            Error while loading movies!
          </div>
        )}
        {!loading && !error && movies.length > 0 && <Slider movies={movies} />}
      </div>
    </>
  );
}
