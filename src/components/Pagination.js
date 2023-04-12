import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../redux/slices/bookSlice";
import { fetchBooks } from "../redux/services/bookService";

const Pagination = () => {
  const [page, setPage] = useState(0);
  const allBooks = useSelector(getBooks);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-end border-t-2 border-tRed pt-2">
      {[...Array(allBooks.data.totalItems).slice(0, 5)].map((item, i) => {
        if (page === i) {
          return (
            <button
              className="border-2 font-bold w-10 h-10 border-tRed ml-2 flex items-center justify-center bg-tRed cursor-pointer text-white"
              key={i}
            >
              {i + 1}
            </button>
          );
        }
        return (
          <button
            className="border-2 font-bold w-10 h-10 border-tBrown ml-2 flex items-center justify-center hover:bg-tBrownLight cursor-pointer"
            key={i}
            value={i}
            onClick={(e) => setPage(Number(e.target.value))}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
