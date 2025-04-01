import NavPage from "../components/navigation/NavPage";
import Filters from "../components/movie-ibrary/Filters";
export default function LibraryPage() {
  return (
    <>
      <div className=" flex flex-col bg-stone-900 w-full bg-cover min-h-screen">
        <NavPage />
        <Filters />
        <h1 className="  text-amber-50">LibraryPage</h1>
      </div>
    </>
  );
}
