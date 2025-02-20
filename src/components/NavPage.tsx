import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function NavPage() {
  return (
    <>
      <div className="relative flex flex-row py-5 ps-8 pe-24 justify-between bg-none items-center">
        <div className=" flex flex-row w-full justify-between items-center">
          <Logo />
          <div className="flex flex-row space-x-10 text-white">
            <Link to="/">
              <span>Choose movie</span>
            </Link>
            <Link to="/movie-library">
              <span>My movie library</span>
            </Link>
            <Link to="/add-movie">
              <span>Add movie</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
