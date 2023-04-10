import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/getBooks", async () => {
  const input = "valorant";
  const startIndex = 12;
  const maxResults = 40;
  const { data } = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=${maxResults}&startIndex=${startIndex}&key=${process.env.REACT_APP_BOOKS_API_KEY}`
  );
  return data;
});
