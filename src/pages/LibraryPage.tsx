import NavPage from "../components/navigation/NavPage";
import Filters from "../components/movie-ibrary/Filters";
import ObjectContainer from "../components/movie-ibrary/ObjectContainer";
import { useState } from "react";
export default function LibraryPage() {
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
