
// css
import "../css/TableContainer.css"
// icons
import { BsCalendar2Date } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { MdNumbers } from "react-icons/md";
import { MdOutlineNotificationImportant } from "react-icons/md";

// components
import TableTicket from "./TableTicket";

function TableContainer() {

  return (
    <>
      <article className="table_container">
        <table className="table__section">
          <thead className="table__thead">
            <tr>
              <th><MdNumbers ></MdNumbers> ID</th>
              <th><BsCalendar2Date /> Fecha</th>
              <th><MdOutlineNotificationImportant /> Prioridad</th>
              <th><FiUsers /> Solicitante</th>
              <th><LuUser2 /> Tecnico Asignado</th>
              <th><IoTimeOutline></IoTimeOutline> 5h</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table__body">
            <TableTicket status={true}></TableTicket>
            <TableTicket status={false} ></TableTicket>
            <TableTicket status={false}></TableTicket>
            <TableTicket status={false}></TableTicket>
            <TableTicket status={false}></TableTicket>
          </tbody>
        </table>
      </article>
    </>
  );
}

export default TableContainer;
