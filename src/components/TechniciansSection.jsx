// css
import "../css/TechniciansSection.css";

// libs
import { unifyAndSum } from "../libs/unifiedCases";

// components
import { TechnicianTable } from "./TechnicianTable";
import { TotalCases } from "./TotalCases";

export function TechniciansSection(props) {
  const { technicians, techniciansAcs, techniciansNeps } = props;

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
          {technicians === true ? (
            <>
              <TechnicianTable techniciansUnified={techniciansUnified} />
              <TotalCases totalCases={totalCases} />
            </>
          ) : (
            <TotalCases totalCases={totalCases} />
          )}
        </div>
      </div>
    </>
  );
}

export default TechniciansSection;
