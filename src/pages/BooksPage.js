import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import BookList from "../components/BookList";
import FilterBar from "../components/FilterBar/FilterBar";

const BooksPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="w-full ">
      <SearchBar text={text} setText={setText} />
      <FilterBar />
      <BookList />
    </div>
  );
};

export default BooksPage;
