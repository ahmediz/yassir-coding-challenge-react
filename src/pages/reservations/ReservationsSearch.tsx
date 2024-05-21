import { useDispatch } from "react-redux";
import { filterReservations } from "./reservationsSlice";

export default function ReservationsSearch() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => dispatch(filterReservations(e.target.value))}
      className="p-2 border border-black/10 w-[300px] h-[50px]"
    />
  );
}
