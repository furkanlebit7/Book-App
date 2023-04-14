import React, { useState } from "react";
import BookList from "../components/BookList";
import FilterBar from "../components/FilterBar/FilterBar";
import Pagination from "../components/Pagination";

const BooksPage = () => {
  return (
    <div className="w-full flex flex-col justify-between ">
      <FilterBar />
      <BookList />
      {/* <Pagination /> */}
    </div>
  );
};

export default BooksPage;
