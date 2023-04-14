import React, { useState } from "react";

const FilterBar = () => {
  const dropdownClass =
    "block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500";
  const inputContainerClass = "mb-4";
  const formClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  const labelClass = "block text-gray-700 text-sm font-bold mb-2";
  const [initialValues, setInitialValues] = useState({
    text: "a",
    filter: "all",
    startIndex: 0,
    maxResults: 40,
    printType: "all",
    orderBy: "relevance",
  });
  return (
    <div>
      <form className="flex items-center justify-between">
        <div className={inputContainerClass}>
          <label className={labelClass} htmlFor="username">
            Search
          </label>
          <input
            className={formClass}
            type="text"
            name="text"
            placeholder="Search book or author"
          />
        </div>
        <div className={inputContainerClass}>
          <label className={labelClass} htmlFor="filter">
            Filter
          </label>
          <select name="filter" className={dropdownClass}>
            <option value="all">All</option>
            <option value="partial">Partial</option>
            <option value="full">Full</option>
            <option value="free-ebooks">Free Ebooks</option>
            <option value="paid-ebooks">Paid Ebooks</option>
            <option value="ebooks">Ebooks</option>
          </select>
        </div>

        <div className={inputContainerClass}>
          <label className={labelClass} htmlFor="printType">
            Print Type
          </label>
          <select name="printType" className={dropdownClass}>
            <option value="all">All</option>
            <option value="books">Partial</option>
            <option value="magazines">Full</option>
          </select>
        </div>
        <div className={inputContainerClass}>
          <label className={labelClass} htmlFor="orderBy">
            Order By
          </label>
          <select name="orderBy" className={dropdownClass}>
            <option value="relevance">All</option>
            <option value="newest">Partial</option>
            <option value="magazines">Full</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
