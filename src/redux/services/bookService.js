import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/getBooks",
  async ({ text, filter, startIndex, maxResults, printType, orderBy }) => {
    const input = text === "" ? "a" : text;

    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${input}&maxResults=${maxResults}&filter=${filter}&printType=${printType}&orderBy=${orderBy}&startIndex=${startIndex}&key=${process.env.REACT_APP_BOOKS_API_KEY}`
    );
    return data;
  }
);
export const fetchBookDetail = createAsyncThunk(
  "books/getBookDetails",
  async (id) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return data;
  }
);
