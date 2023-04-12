import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";

const BooksPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-full ">
      <SearchBar text={text} setText={setText} />
      <BookList />
    </div>
  );
};

export default BooksPage;
