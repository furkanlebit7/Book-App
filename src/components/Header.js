//PACKAGES
import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";

const Header = ({ to }) => {
  const { pathname } = useResolvedPath(to);
  const [activePath, setActivePath] = useState("/");

  const liClass =
    "pb-6 hover:text-tRed w-full text-center border-bgMain border-b-2 ";
  const active =
    "pb-6 hover:text-tRed w-full text-center border-tRed border-b-2";

  //Changes NAV active animation based on url
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className="flex items-center justify-between">
      <div className="border-b-black border-b lg:w-1/3 lg:flex-none flex-auto mr-16 ">
        <ul className="flex items-center justify-around font-medium text-md text-tBrown cursor-pointer  ">
          <Link to="/" className={activePath === "/" ? active : liClass}>
            <li>HOME</li>
          </Link>
          <Link
            to="/books"
            className={activePath === "/books" ? active : liClass}
          >
            <li>BOOKS</li>
          </Link>
          {/* <Link
            to="/events"
            className={activePath === "/events" ? active : liClass}
          >
            <li>EVENTS</li>
          </Link>
          <Link
            to="/contacts"
            className={activePath === "/contacts" ? active : liClass}
          >
            <li>CONTACTS</li>
          </Link>
          <Link
            to="/program"
            className={activePath === "/program" ? active : liClass}
          >
            <li>PROGRAM</li>
          </Link>

          <Link
            to="/catalog"
            className={activePath === "/catalog" ? active : liClass}
          >
            <li>CATALOG</li>
          </Link> */}
        </ul>
      </div>

      {/* SEARCH INPUT */}
      {/* <div>
        <div className="border border-black flex items-center rounded-3xl pl-3">
          <input
            type="text"
            className="h-8 focus:border-0 focus:outline-none bg-transparent rounded-3xl pl-1"
          />
          <button className="bg-tBrown rounded-3xl p-1 px-8 text-white">
            SEARCH
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
