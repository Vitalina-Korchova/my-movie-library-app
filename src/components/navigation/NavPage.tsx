import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

export default function NavPage() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  const handleCloseMenu = () => {
    setIsClose(true);
    setIsSmallScreen(false);
    setTimeout(() => {
      setIsClose(false);
      setIsOpen(false);
    }, 500);
  };

  const handleOpenMenu = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsSmallScreen(true);
    }, 10);
  };

  return (
    <>
      <div className="relative flex flex-row py-5 px-10 justify-between bg-none items-center">
        <div className=" flex flex-row w-full justify-between items-center">
          <Link to="/my-movie-library-app">
            <Logo />
          </Link>
          <IoMenu
            onClick={handleOpenMenu}
            className="text-5xl text-white md:hidden cursor-pointer
             hover:text-yellow-400 max-[465px]:text-3xl"
          />
          {isOpen ? (
            <>
              <div
                className={`fixed right-0 top-0 z-50 bg-black h-screen rounded-lg border-[1px] border-neutral-600 
                transition-transform duration-500 ease-in-out
                ${
                  isSmallScreen
                    ? isClose
                      ? "translate-x-full"
                      : "translate-x-0"
                    : "translate-x-full"
                }`}
              >
                <div className="w-80  p-8 ">
                  <div className="flex flex-col space-y-6">
                    <div className="flex justify-end">
                      <RxCross1
                        onClick={handleCloseMenu}
                        className="text-white text-3xl hover:text-yellow-400 cursor-pointer max-[465px]:text-3xl"
                      />
                    </div>
                    <div>
                      <Link to="/my-movie-library-app">
                        <span
                          className={`inline-block  hover:text-yellow-400 text-xl max-[465px]:text-lg ${
                            isActive("/") ? "text-yellow-400" : "text-white"
                          }`}
                        >
                          Home
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/my-movie-library-app/movie-library">
                        <span
                          className={`inline-block   hover:text-yellow-400 text-xl max-[465px]:text-lg ${
                            isActive("/movie-library")
                              ? "text-yellow-400"
                              : "text-white"
                          }`}
                        >
                          My movie library
                        </span>
                      </Link>
                    </div>
                    <div>
                      <Link to="/my-movie-library-app/add-movie">
                        <span
                          className={`inline-block   hover:text-yellow-400 text-xl max-[465px]:text-lg ${
                            isActive("/add-movie")
                              ? "text-yellow-400"
                              : "text-white"
                          }`}
                        >
                          Add movie
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="hidden md:flex  flex-row space-x-10">
                <Link to="/my-movie-library-app" className="relative group">
                  <span
                    className={`inline-block  text-white hover:text-yellow-400 ${
                      isActive("/") ? "text-yellow-400" : "text-white"
                    }`}
                  >
                    Home
                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </span>
                </Link>
                <Link
                  to="/my-movie-library-app/movie-library"
                  className="relative group"
                >
                  <span
                    className={`inline-block  text-white hover:text-yellow-400 ${
                      isActive("/movie-library")
                        ? "text-yellow-400"
                        : "text-white"
                    }`}
                  >
                    My movie library
                    <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-yellow-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </span>
                </Link>
                <Link
                  to="/my-movie-library-app/add-movie"
                  className="relative group"
                >
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
            </>
          )}
        </div>
      </div>
    </>
  );
}
