import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { filterReservations } from "./reservationsSlice";

type FormData = {
  date: string;
  status: string;
  shift: string;
  area: string;
};

export default function ReservationsFilterForm() {
  const { register, handleSubmit } = useForm<FormData>();
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormData> = (data: FormData) =>
    dispatch(filterReservations(data));
  return (
    <>
      <div className="flex gap-2 items-end">
        <form className="flex gap-2 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="mb-1">
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="border border-black/10 p-2 h-[40px]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="mb-1">
              Status
            </label>
            <select
              id=""
              className="border border-black/10 p-2 h-[40px]"
              {...register("status")}
            >
              <option value="">All</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="SEATED">Seated</option>
              <option value="CHECKED OUT">Checked Out</option>
              <option value="NOT CONFIRMED">Not Confirmed</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="mb-1">
              Shift
            </label>
            <select
              id=""
              className="border border-black/10 p-2 h-[40px]"
              {...register("shift")}
            >
              <option value="">All</option>
              <option value="BREAKFAST">Breakfast</option>
              <option value="LUNCH">Lunch</option>
              <option value="DINNER">Dinner</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="" className="mb-1">
              Area
            </label>
            <select
              id=""
              className="border border-black/10 p-2 h-[40px]"
              {...register("area")}
            >
              <option value="">All</option>
              <option value="BAR">Bar</option>
              <option value="MAIN ROOM">Main Room</option>
            </select>
          </div>
        </form>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="bg-primary-500 hover:bg-primary-700 text-white px-5 h-[40px]"
        >
          Apply
        </button>
      </div>
    </>
  );
}
