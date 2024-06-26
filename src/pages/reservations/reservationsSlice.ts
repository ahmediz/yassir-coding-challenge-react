import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ReservationsState {
  reservations: Reservation[];
  filteredReservations: Reservation[];
  sorting: {
    by: string;
    direction: "ASC" | "DESC" | "";
  };
  filters: {
    search: string;
    date: string;
    status: string;
    shift: string;
    area: string;
  };
}

const initialState: ReservationsState = {
  reservations: [],
  filteredReservations: [],
  sorting: {
    by: "",
    direction: "",
  },
  filters: {
    search: "",
    date: "",
    status: "",
    shift: "",
    area: "",
  },
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setData: (
      state: ReservationsState,
      action: PayloadAction<Reservation[]>
    ) => {
      state.reservations = action.payload;
      state.filteredReservations = action.payload;
    },
    sortReservations: (
      state: ReservationsState,
      action: PayloadAction<string>
    ) => {
      state.sorting.by = action.payload;
      state.sorting.direction =
        state.sorting.direction === "ASC" ? "DESC" : "ASC";
      state.filteredReservations = state.filteredReservations.sort((a, b) => {
        const { by, direction } = state.sorting;
        if (action.payload === "firstName") {
          if (direction === "ASC") {
            return eval(`a.customer.${by}`).localeCompare(eval(`b.customer.${by}`));
          }
          return eval(`b.customer.${by}`).localeCompare(eval(`a.customer.${by}`));
        } 
        if (direction === "ASC") {
          return eval(`a.${by}`).localeCompare(eval(`b.${by}`));
        }
        return eval(`b.${by}`).localeCompare(eval(`a.${by}`));
      });
    },
    filterReservations: (
      state: ReservationsState,
      action: PayloadAction<{}>
    ) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };

      const { search, area, shift, status, date } = state.filters;

      state.filteredReservations = state.reservations.reduce(
        (accumulator: Reservation[], item: Reservation) => {
          if (
            (item.area === area || area === "") &&
            (item.shift === shift || shift === "") &&
            (item.status === status || status === "") &&
            ((new Date(item.start.split("T")[0]) <= new Date(date) &&
              new Date(item.end.split("T")[0]) >= new Date(date)) ||
              date === "") &&
            (item.customer.firstName
              .toLowerCase()
              .startsWith(search.toLowerCase()) ||
              item.customer.lastName
                .toLowerCase()
                .startsWith(search.toLowerCase()) ||
              search === "")
          ) {
            accumulator.push(item);
          }

          return Array.from(new Set(accumulator));
        },
        []
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, filterReservations, sortReservations } =
  reservationsSlice.actions;

export const selectReservations = (state: RootState) =>
  state.reservations.filteredReservations;

export const selectFilters = (state: RootState) => state.reservations.filters;

export default reservationsSlice.reducer;
