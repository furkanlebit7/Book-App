import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/services/bookService";
import { getBooks } from "../redux/slices/bookSlice";
import Loading from "../components/Loading/Loading";
import { Link } from "react-router-dom";

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
        <hr className="mb-3 border-tBrown border" />
        <div className="w-full">
          <ul className="grid grid-cols-5 gap-6 auto-rows-fr">
            {allBooks.data.items.map((book) => (
              <Link>
                <li
                  key={book.id}
                  className="rounded border-tBrown border-2 p-3 h-full flex flex-col justify-between items-center drop-shadow-2xl"
                >
                  <h1 className="font-bold text-center">
                    {book.volumeInfo.title}
                  </h1>

                  <img
                    className="max-h-min border-4 border-tRed my-3 w-32"
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "https://www.yesilaymarket.com/Data/EditorFiles/urun-gorseli-hazirlaniyor.svg"
                    }
                  />

                  <h1 className="font-bold text-center font-mono">
                    {book.volumeInfo.authors}
                  </h1>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default BooksPage;
