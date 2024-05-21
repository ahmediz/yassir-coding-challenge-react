import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ReservationsState {
  reservations: Reservation[];
  filteredReservations: Reservation[];
  filters: {
    search: string;
    date: string | undefined;
    status: string | undefined;
    shift: string | undefined;
    area: string | undefined;
  };
}

const initialState: ReservationsState = {
  reservations: [],
  filteredReservations: [],
  filters: {
    search: "",
    date: undefined,
    status: undefined,
    shift: undefined,
    area: undefined,
  },
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Reservation[]>) => {
      state.reservations = action.payload;
      state.filteredReservations = action.payload;
    },
    filterReservations: (state, action: PayloadAction<{}>) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };

      const { search, area } = state.filters;

      state.filteredReservations =
        search === ""
          ? state.reservations
          : state.reservations.filter((x) => {
              console.log((x.customer.firstName + x.customer.lastName).toLowerCase());
              (x.customer.firstName + x.customer.lastName)
                .toLowerCase()
                .includes(search.toLowerCase());
            });

      state.filteredReservations =
        area === "All"
          ? state.reservations
          : state.reservations.filter((x) => x.area === area);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, filterReservations } = reservationsSlice.actions;

export const selectReservations = (state: RootState) =>
  state.reservations.filteredReservations;

export const selectFilters = (state: RootState) => state.reservations.filters;

export default reservationsSlice.reducer;
