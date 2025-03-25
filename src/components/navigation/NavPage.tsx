import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function NavPage() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="relative flex flex-row py-5 ps-8 pe-24 justify-between bg-none items-center">
        <div className=" flex flex-row w-full justify-between items-center">
          <Logo />
          <div className="flex flex-row space-x-10">
            <Link to="/" className="relative group">
              <span
                className={`inline-block  text-white hover:text-yellow-400 ${
                  isActive("/") ? "text-yellow-400" : "text-white"
                }`}
              >
                Home
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link to="/movie-library" className="relative group">
              <span
                className={`inline-block  text-white hover:text-yellow-400 ${
                  isActive("/movie-library") ? "text-yellow-400" : "text-white"
                }`}
              >
                My movie library
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
            <Link to="/add-movie" className="relative group">
              <span
                className={`inline-block  text-white hover:text-yellow-400 ${
                  isActive("/add-movie") ? "text-yellow-400" : "text-white"
                }`}
              >
                Add movie
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
