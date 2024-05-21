export default function ReservationItem(reservation: Reservation) {
  let statusColor;

  switch (reservation.status) {
    case "CHECKED OUT":
      statusColor = "#95a5a6";
      break;
    case "CONFIRMED":
      statusColor = "#2ecc71";
      break;
    case "NOT CONFIRMED":
      statusColor = "#e74c3c";
      break;
    default:
      statusColor = "#3498db";
      break;
  }
  return (
    <tr style={{animation: 'fadeIn .3s ease-in-out'}}>
      <td className="px-3 py-2 border border-black/10 text-left">
        {reservation.id}
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        {reservation.customer.firstName + " " + reservation.customer.lastName}
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        <span style={{ textTransform: "capitalize" }}>
          {reservation.area.toLowerCase()}
        </span>
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        {reservation.quantity}
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        <span style={{ textTransform: "capitalize" }}>
          {reservation.shift.toLowerCase()}
        </span>
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        {reservation.businessDate}
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        {reservation.guestNotes ? reservation.guestNotes : "--"}
      </td>
      <td className="px-3 py-2 border border-black/10 text-left">
        <span style={{ textTransform: "capitalize", color: statusColor }}>
          {reservation.status.toLowerCase()}
        </span>
      </td>
    </tr>
  );
}
