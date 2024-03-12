// icons
import { LuUser2 } from "react-icons/lu";

export function TechnicianTable(props) {
  const { techniciansUnified } = props;

  return (
    <>
      <div className="technician__table__container">
        <table className="technician__table">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <LuUser2 /> Tecnico
              </th>
              <th>Casos Resueltos</th>
            </tr>
          </thead>
          <tbody>
            {techniciansUnified.map((tech, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{tech.name}</td>
                  <td>{tech.cases}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
