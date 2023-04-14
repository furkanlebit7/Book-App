import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../redux/services/bookService";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 1000);
  const dispatch = useDispatch("");

  useEffect(() => {
    dispatch(fetchBooks({ text: text, printType: "all" }));
  }, [dispatch, value]);
  return (
    <div className="flex ">
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search Book Name or Author"
          className="w-full bg-transparent border-b border-tBrown  px-5  text-lg focus:outline-none py-1"
        />
      </div>
    </div>
  );
};

export default SearchBar;
