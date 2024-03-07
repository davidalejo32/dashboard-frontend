import "../css/TableTicket.css";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineNotificationsActive } from "react-icons/md";

function TableTicket(props) {
  const { status } = props;
  return (
    <>
      <tr className={status == true ? "ticket__container" : "ticket__container alert"}>
        <td className="ticket__item">
          <a href="">2423</a>
        </td>
        <td className="ticket__item">06/06/2024</td>
        <td className="ticket__item">Urgente</td>
        <td className="ticket__item">gladys parrido</td>
        <td className="ticket__item">david claros</td>
        <td className="ticket_item">5h</td>
        <td className="ticket_item">
          {status == true ? (
            <CiCircleCheck className="check__icon" size={20} />
          ) : (
            <MdOutlineNotificationsActive
              className="notification__icon"
              size={20}
            />
          )}
        </td>
      </tr>
    </>
  );
}

export default TableTicket;
