import { bookStoreApi } from "../../helpers/request";
import {
  addBooks,
  setBooks,
  startLoadingBooks,
  removeBookById,
  getBookById,
  setAvailables,
} from "./booksSlice";

export const getBooks = (page = 1, limit = 5) => {
  return async (dispatch) => {
    dispatch(startLoadingBooks());
    const res = await bookStoreApi.get(`products?limit=${limit}&page=${page}`);
    const data = res?.data?.data;
    dispatch(setBooks({ books: data?.products, page, total: data?.total_books }));
  };
};

export const addBook = (book) => {
  return async (dispatch) => {
    dispatch(startLoadingBooks());
    const data = await bookStoreApi.post(`products`, book);
    dispatch(addBooks({ book: data.data.data.product }));
  };
};

export const removeBook = (key) => {
  return async (dispatch) => {
    bookStoreApi.delete(`products/${key}`);
    dispatch(removeBookById({ _id: key }));
  };
};

export const getBook = (idBook) => {
  return async (dispatch) => {
    dispatch(startLoadingBooks());
    const data = await bookStoreApi.get(`products/${idBook}`);
    const { product } = data.data.data;
    dispatch(getBookById({ book: product }));
  };
};

export const getAvailablesBooks = (idBook) => {
  return async (dispatch) => {
    const dateNow = new Date();
    dateNow.setHours(0, 0, 0, 0);

    const danteEnd = new Date(dateNow);
    danteEnd.setDate(dateNow.getDate() + 7);

    const res = await bookStoreApi.get(`products/${idBook}/reservations`, {
      params: {
        start_date: dateNow,
        end_date: danteEnd,
      },
    });
    dispatch(setAvailables({ dataReservations: res.data.data }));
  };
};

export const setReservation = (idBook, book) => {
  return async (dispatch) => {
    await bookStoreApi.post(`products/${idBook}/reservations`, book);
    dispatch(getAvailablesBooks(idBook));
    dispatch(getBook(idBook));
  };
};
