import { configureStore } from "@reduxjs/toolkit";
import { booksSlice } from "./books";
import { reservationsSlice } from "./reservations/reservationSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    reservations: reservationsSlice.reducer,
  },
});
