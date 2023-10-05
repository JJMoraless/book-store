import { createSlice } from "@reduxjs/toolkit";

export const reservationsSlice = createSlice({
  name: "reservations",

  initialState: {
    isLoading: false,
    reservations: [],
  },
  reducers: {
    startLoadingReservations: (state) => {
      state.isLoading = true;
    },

    setReservationsByUser: (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload.reservations;
    },
  },
});

export const {
  setReservationsByUser,
  startLoadingReservations,
} = reservationsSlice.actions;
