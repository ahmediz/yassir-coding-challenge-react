import { useEffect } from "react";
import ReservationItem from "./ReservationItem";
import { useDispatch, useSelector } from "react-redux";
import { selectReservations, setData } from "./reservationsSlice";
import ReservationsSearch from "./reservationsSearch";

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

      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr>
            <th className="px-3 py-2 border border-black/10 text-left">id</th>
            <th className="px-3 py-2 border border-black/10 text-left">name</th>
            <th className="px-3 py-2 border border-black/10 text-left">area</th>
            <th className="px-3 py-2 border border-black/10 text-left">
              quantity
            </th>
            <th className="px-3 py-2 border border-black/10 text-left">
              shift
            </th>
            <th className="px-3 py-2 border border-black/10 text-left">Date</th>
            <th className="px-3 py-2 border border-black/10 text-left">
              guestNotes
            </th>
            <th className="px-3 py-2 border border-black/10 text-left">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations?.map((reservation) => {
            return <ReservationItem key={reservation.id} {...reservation} />;
          })}
        </tbody>
      </table>
    </>
  );
}
