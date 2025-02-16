import { Link } from "react-router-dom";
import Logo from "./Logo";
export default function NavPage() {
  return (
    <>
      <div className=" flex flex-row gap-7 pb-5">
        <Logo />
        <Link to="/">
          <span>Choose movie</span>
        </Link>
        <Link to="/movie-library">
          <span>My movie library</span>
        </Link>
        <Link to="/add-movie">
          <span>Add movie </span>
        </Link>
      </div>
    </>
  );
}
