import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/services/bookService";
import { getBooks } from "../redux/slices/bookSlice";
import Loading from "../components/Loading/Loading";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const BooksPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const allBooks = useSelector(getBooks);
  console.log(allBooks);

  if (allBooks.status === "loading") {
    return <Loading />;
  }

  if (allBooks.status === "succeeded") {
    return (
      <div className="w-full ">
        <SearchBar />
        <div className="w-full my-10">
          <ul className="grid grid-cols-5 gap-6 auto-rows-fr">
            {allBooks.data.items.map((book) => (
              <BookCard book={book} key={book.id} />
            ))}
          </ul>
        </div>

        <hr className="mb-3 border-tBrown border" />
      </div>
    );
  }
};

export default BooksPage;
