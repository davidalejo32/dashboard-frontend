// css
import "../css/TechniciansSection.css";

// libs
import { unifyAndSum } from "../libs/unifiedCases";

// icons
import { LuUser2 } from "react-icons/lu";
import { MdOutlineSupport } from "react-icons/md";


function TechniciansSection(props) {


  const { techniciansAcs, techniciansNeps } = props;

  const techniciansUnified = unifyAndSum(techniciansAcs, techniciansNeps);

  const totalCases = techniciansUnified.reduce(function (total, current) {
    // Verificar si el objeto actual tiene la propiedad "cases" y si su valor es numérico
    if (typeof current.cases === "number" && !isNaN(current.cases)) {
      // Sumar el valor de "cases" al total acumulado
      return total + current.cases;
    } else {
      // Si el objeto actual no tiene la propiedad "cases" o su valor no es numérico, simplemente retornar el total acumulado sin modificar
      return total;
    }
  }, 0);


  return (
    <>
      <div className="technician__container">
        <h2 className="technician__title">Resumen</h2>
        <div className="technician__table__container">
          <table className="technician__table">
            <thead>
              <tr>
                <th>#</th>
                <th><LuUser2/> Tecnico</th>
                <th>Casos Resueltos</th>
              </tr>
            </thead>
            <tbody>
              {techniciansUnified.map((tech, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{tech.name}</td>
                  <td>{tech.cases}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="technician__resume">
            <MdOutlineSupport size={25}/> Total Casos: <span>{totalCases}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default TechniciansSection;
