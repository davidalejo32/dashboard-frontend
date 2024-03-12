// icons
import { MdOutlineSupport } from "react-icons/md";

export function TotalCases(props) {
  const { totalCases } = props;

  return (
    <>
      <p className="technician__resume">
        <MdOutlineSupport size={25} /> Total Casos: <span>{totalCases}</span>
      </p>
    </>
  );
}
