import NavPage from "../components/navigation/NavPage";
import Filters from "../components/movie-ibrary/Filters";
import ObjectContainer from "../components/movie-ibrary/ObjectContainer";
export default function LibraryPage() {
  return (
    <>
      <div className=" flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <Filters />
        <ObjectContainer />
      </div>
    </>
  );
}
