import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <Link>
      <li className="rounded border-tBrown border-2 p-3 h-full flex flex-col justify-between items-center drop-shadow-2xl hover:bg-tBrownLight hover:border-tRed">
        <img
          className="border-4 border-tRed my-3 h-44"
          alt="Book Cover"
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : require("../assets/images/not.png")
          }
        />
        <h1 className="font-bold text-center">
          {book.volumeInfo.title.slice(0, 65)}
          {book.volumeInfo.title.length > 65 ? "..." : ""}
        </h1>
      </li>
    </Link>
  );
};

export default BookCard;
