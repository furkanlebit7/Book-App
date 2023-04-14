import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import { fetchBooks } from "../../redux/services/bookService";
import { setFilterList } from "../../redux/slices/bookSlice";

const FilterBar = () => {
  const dispatch = useDispatch();

  const [initialValues, setInitialValues] = useState({
    text: "",
    filter: "partial",
    startIndex: 0,
    maxResults: 40,
    printType: "all",
    orderBy: "relevance",
  });
  const [values] = useDebounce(initialValues, 1000);

  useEffect(() => {
    dispatch(fetchBooks(values));
    dispatch(setFilterList(values));
  }, [values]);

  const classes = {
    dropdownClass:
      "block appearance-none w-full border border-tBrown text-tBrown py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-transparent focus:bg-transparent",
    inputContainerClass: "mb-4 ",
    formClass:
      "shadow appearance-none border rounded w-full py-3 px-3 text-tBrown leading-tight focus:outline-none focus:shadow-outline bg-transparent border-tBrown",
    labelClass: "block text-gray-700 text-sm font-bold mb-2",
  };
  return (
    <div className="border-b border-tBrown pb-9">
      <form
        className="flex flex-col mx-6 md:mx-0"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap">
          <div
            className={`${classes.inputContainerClass} flex-auto w-full md:w-fit `}
          >
            <label className={classes.labelClass} htmlFor="Search">
              Search
            </label>
            <input
              onChange={(e) =>
                setInitialValues({ ...initialValues, text: e.target.value })
              }
              value={initialValues.text}
              className={classes.formClass}
              type="text"
              name="text"
              placeholder="Search book or author"
            />
          </div>
          <div className={`${classes.inputContainerClass} md:mx-2`}>
            <label className={classes.labelClass} htmlFor="filter">
              Filter
            </label>
            <select
              onChange={(e) =>
                setInitialValues({ ...initialValues, filter: e.target.value })
              }
              name="filter"
              className={classes.dropdownClass}
              value={initialValues.filter}
            >
              <option value="partial">Partial</option>
              <option value="full">Full</option>
              <option value="free-ebooks">Free Ebooks</option>
              <option value="paid-ebooks">Paid Ebooks</option>
              <option value="ebooks">Ebooks</option>
            </select>
          </div>

          <div className={`${classes.inputContainerClass} mr-2`}>
            <label className={classes.labelClass} htmlFor="printType">
              Print Type
            </label>
            <select
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  printType: e.target.value,
                })
              }
              name="printType"
              className={classes.dropdownClass}
              value={initialValues.printType}
            >
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="magazines">Magazines</option>
            </select>
          </div>
          <div className={classes.inputContainerClass}>
            <label className={classes.labelClass} htmlFor="orderBy">
              Order By
            </label>
            <select
              onChange={(e) =>
                setInitialValues({
                  ...initialValues,
                  orderBy: e.target.value,
                })
              }
              name="orderBy"
              className={classes.dropdownClass}
              value={initialValues.orderBy}
            >
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterBar;
