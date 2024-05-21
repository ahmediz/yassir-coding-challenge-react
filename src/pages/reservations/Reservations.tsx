import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectReservations,
  setData,
  sortReservations,
} from "./reservationsSlice";
import ReservationsSearch from "./reservationsSearch";
import ReservationItem from "./reservationItem";
import ReservationsFilterForm from "./reservationsFilterForm";

export default function Reservations() {
  const reservations = useSelector(selectReservations);
  const dispatch = useDispatch();

  async function getUsers() {
    const response = await fetch("../../src/assets/db/data.json");
    const data = await response.json();
    dispatch(setData(data.reservations));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="flex justify-between mb-3 items-center">
        <h1 className="text-2xl font-bold">Reservations</h1>
        <ReservationsSearch />
      </div>

      <div className="my-6">
        <ReservationsFilterForm />
      </div>

      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr>
            <th className="px-3 py-2 border border-black/10 text-left">id</th>
            <th
              className="px-3 py-2 border border-black/10 text-left"
              role="button"
              onClick={() => dispatch(sortReservations("firstName"))}
            >
              name
            </th>
            <th
              className="px-3 py-2 border border-black/10 text-left"
              role="button"
              onClick={() => dispatch(sortReservations("area"))}
            >
              area
            </th>
            <th className="px-3 py-2 border border-black/10 text-left">
              quantity
            </th>
            <th
              className="px-3 py-2 border border-black/10 text-left"
              role="button"
              onClick={() => dispatch(sortReservations("shift"))}
            >
              shift
            </th>
            <th className="px-3 py-2 border border-black/10 text-left">Date</th>
            <th className="px-3 py-2 border border-black/10 text-left">
              guestNotes
            </th>
            <th
              className="px-3 py-2 border border-black/10 text-left"
              role="button"
              onClick={() => dispatch(sortReservations("status"))}
            >
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {!reservations.length ? (
            <tr>
              <td
                colSpan={8}
                className="px-3 py-2 border border-black/10 text-center"
              >
                No reservations found
              </td>
            </tr>
          ) : (
            reservations?.map((reservation) => {
              return <ReservationItem key={reservation.id} {...reservation} />;
            })
          )}
        </tbody>
      </table>
    </>
  );
}
