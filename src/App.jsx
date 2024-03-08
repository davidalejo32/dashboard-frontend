import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./css/App.css";
import TableContainer from "./components/TableContainer";
import { getTicketsNeps } from "./api/neps";

const linkAcs = "https://helpdesk.acielcolombia.com:8080/index.php";
const linkNeps = "https://acielcolombia.com:86/helpdeskacsneps/index.php";

function App() {

  const [ticketsNeps, setTicketsNeps] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de especialidades
    const fetchTicketsNeps = async () => {
      try {
        const response = await getTicketsNeps(); // Debes implementar la función getSpecialty para hacer la petición a la API y obtener la lista de especialidades
        setTicketsNeps(response.data.tickets);
        // Asigna la lista de especialidades a la variable de estado specialty
      } catch (error) {
        // console.log(error);
      }
    };

    fetchTicketsNeps();
  }, []);

  // console.log(ticketsNeps);

  return (
    <>
      <section className="section__table">
        <TableContainer title={"Hepldesk Nueva EPS"} link={linkNeps} data={ticketsNeps} />
        <TableContainer title={"Hepldesk ACS"} link={linkAcs} />
      </section>
    </>
  );
}

export default App;
