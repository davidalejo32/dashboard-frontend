import "../css/TableTicket.css";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";

function TableTicket(ticket) {
  const { id, date, priority, status, technician, time, user, description } =
    ticket;
  return (
    <>
      <tr
        className={
          status == true ? "ticket__container" : "ticket__container alert"
        }
      >
        <td className="ticket__item">
          <a href="">{id}</a>
        </td>
        <td className="ticket__item">{date}</td>
        <td className="ticket__item">{priority}</td>
        <td className="ticket__item">{user}</td>
        <td className="ticket__item">{technician}</td>
        <td className="ticket_item">{time}</td>
        <td className="ticket_item">
          {status == true ? (
            <CiCircleCheck className="check__icon" size={20} />
          ) : (
            <MdOutlineNotificationsActive
              className="notification__icon"
              size={20}
            />
          )}
          <p className="ticket__desciption">{description}</p>
        </td>
      </tr>
    </>
  );
}

export default TableTicket;
