import { configureStore } from "@reduxjs/toolkit";
import ReservationsReducer from "./pages/reservations/reservationsSlice";

export const store = configureStore({
  reducer: {
    reservations: ReservationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
