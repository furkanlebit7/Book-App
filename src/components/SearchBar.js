import React from "react";

const SearchBar = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Search Book Name or Author"
        className="w-full bg-transparent border-b border-tBrown  px-5  text-lg focus:outline-none py-1"
      />
    </div>
  );
};

export default SearchBar;
