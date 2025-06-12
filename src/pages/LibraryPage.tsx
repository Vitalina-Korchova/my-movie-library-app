import NavPage from "../components/navigation/NavPage";
import Filters from "../components/movie-ibrary/Filters";
import ObjectContainer from "../components/movie-ibrary/ObjectContainer";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function LibraryPage() {
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [genre, setGenre] = useState<string | null>(null);
  const [actor, setActor] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const clearFilters = () => {
    setTitle("");
    setYear("");
    setGenre(null);
    setActor("");
    setCountry("");
    setSearchParams({});
  };

  //URL
  useEffect(() => {
    const initTitle = searchParams.get("title") || "";
    const initYear = searchParams.get("year") || "";
    const initGenre = searchParams.get("genre") || null;
    const initActor = searchParams.get("actor") || "";
    const initCountry = searchParams.get("country") || "";

    setTitle(initTitle);
    setYear(initYear);
    setGenre(initGenre);
    setActor(initActor);
    setCountry(initCountry);
  }, [searchParams]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {};
    if (title) params.title = title;
    if (year) params.year = year;
    if (genre) params.genre = genre;
    if (actor) params.actor = actor;
    if (country) params.country = country;
    setSearchParams(params);
  }, [title, year, genre, actor, country, setSearchParams]);

  return (
    <>
      <div className=" flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <Filters
          title={title}
          setTitle={setTitle}
          year={year}
          setYear={setYear}
          genre={genre}
          setGenre={setGenre}
          actor={actor}
          setActor={setActor}
          country={country}
          setCountry={setCountry}
          clearFilters={clearFilters}
        />
        <ObjectContainer
          title={title}
          year={year}
          genre={genre}
          actor={actor}
          country={country}
        />
      </div>
    </>
  );
}
