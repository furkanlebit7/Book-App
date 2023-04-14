import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../redux/slices/bookSlice";
import Loading from "./Loading/Loading";
import BookCard from "./BookCard";

const BookList = () => {
  const allBooks = useSelector(getBooks);

  //Loading
  if (allBooks.status === "loading") {
    return <Loading />;
  }
  //if there are books
  if (allBooks.status === "succeeded" && allBooks.data.items) {
    return (
      <div className="w-full my-2">
        <ul className="grid grid-cols-5 gap-6 auto-rows-fr my-5">
          {allBooks.data.items.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </ul>
      </div>
    );
  }
  //if there is no book name typed
  if (allBooks.status === "succeeded" && !allBooks.data.items) {
    return (
      <div className="w-full my-2 flex items-center justify-center h-1/2">
        <h1 className="text-5xl mt-11">No Book or Author Found!</h1>
      </div>
    );
  }
};

export default BookList;
