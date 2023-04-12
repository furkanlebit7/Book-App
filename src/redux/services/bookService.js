import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/getBooks",
  async ({ text, printType, page }) => {
    const input = text ? text : "a";
    const startIndex = 12 * 2;
    const type = printType ? printType : "all";
    const maxResults = 40;
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=${maxResults}&printType=${type}&startIndex=${startIndex}&key=${process.env.REACT_APP_BOOKS_API_KEY}`
    );
    return data;
  }
);
