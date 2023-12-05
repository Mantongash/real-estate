import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="bg-slate-200 p-3 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/">
          <h1 className="text-sm sm:text-lg font-bold flex flex-wrap">
            <span className="text-red-900">Flags</span>
            <span className="text-gray-600">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="search"
            placeholder="Search ..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-3 text-slate-600">
          <Link to="/">
            <li className="hidden sm:inline hover:text-red-900 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            {" "}
            <li className="hidden sm:inline hover:text-red-900 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            {" "}
            <li className="hidden sm:inline hover:text-red-900 cursor-pointer">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
