import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ReservationsState {
  reservations: Reservation[];
  filteredReservations: Reservation[];
}

const initialState: ReservationsState = {
  reservations: [],
  filteredReservations: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Reservation[]>) => {
      state.reservations = action.payload;
      state.filteredReservations = action.payload;
    },
    filterReservations: (state, action: PayloadAction<string>) => {
      const searchKeyword = action.payload;

      state.filteredReservations = state.reservations.filter(
        (x) =>
          x.customer.firstName
            .toLowerCase()
            .startsWith(searchKeyword.toLowerCase()) ||
          x.customer.lastName
            .toLowerCase()
            .startsWith(searchKeyword.toLowerCase())
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, filterReservations } = reservationsSlice.actions;

export const selectReservations = (state: RootState) =>
  state.reservations.filteredReservations;

export default reservationsSlice.reducer;
