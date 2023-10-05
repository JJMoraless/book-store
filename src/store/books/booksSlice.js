import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",

  initialState: {
    isLoading: false,
    books: [],
    page: 1,
    total: 0,
    book: {},
    dataReservations: {},
  },

  reducers: {
    startLoadingBooks: (state) => {
      state.isLoading = true;
    },

    setBooks: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.books = action.payload.books;
      state.total = action.payload.total;
    },

    addBooks: (state, action) => {
      state.isLoading = false;
      state.books.unshift(action.payload.book);
      state.total += 1;
    },

    removeBookById: (state, action) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
      state.total -= 1;
    },

    updateBookById: (state, action) => {
      const index = state.books.findIndex(
        (book) => book._id === action.payload.book._id
      );
      state.books[index] = action.payload.book;
    },

    getBookById: (state, action) => {
      state.isLoading = false;
      state.book = action.payload.book;
    },

    setAvailables: (state, action) => {
      state.dataReservations = action.payload.dataReservations;
    },
  },
});

export const {
  removeBookById,
  startLoadingBooks,
  setBooks,
  addBooks,
  getBookById,
  setAvailables,
} = booksSlice.actions;
