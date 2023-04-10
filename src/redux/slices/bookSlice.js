//PACKAGES
import { createSlice } from "@reduxjs/toolkit";
//DOCS
import { fetchBooks } from "../services/bookService";

const initialState = {
  allBooks: {
    data: [],
    status: "idle",
  },
};

// Then, handle actions in your reducers:
const BooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //FETCH BOOKS
    builder.addCase(fetchBooks.pending, (state) => {
      state.allBooks.status = "loading";
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.allBooks.data = action.payload;
      state.allBooks.status = "succeeded";
    });
  },
});
export default BooksSlice.reducer;

//STATE CALLS
export const getBooks = (state) => state.books.allBooks;
