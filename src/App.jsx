import { useState, useEffect } from "react";

// api
import { getTicketsNeps, getTechniciansNeps } from "./api/neps";
import { getTicketsACS, getTechniciansACS } from "./api/acs";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./css/App.css";
import TableContainer from "./components/TableContainer";
import TechniciansSection from "./components/TechniciansSection";

// libs

import { playSoundForTickets } from "./libs/playSound";

const linkAcs = "https://helpdesk.acielcolombia.com:8080/index.php";
const linkAcsTicket =
  "https://helpdesk.acielcolombia.com:8080/front/ticket.form.php?id";

const linkNeps = "https://acielcolombia.com:86/helpdeskacsneps/index.php";
const linkNepsTicket =
  "https://acielcolombia.com:86/helpdeskacsneps/front/ticket.form.php?id";

function App() {
  const [ticketsNeps, setTicketsNeps] = useState([]);
  const [techniciansNeps, setTechniciansNeps] = useState([]);

  const [ticketsACS, setTicketsACS] = useState([]);
  const [techniciansACS, setTechniciansACS] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de tickets para neps
    const fetchTicketsNeps = async () => {
      try {
        const responseNeps = await getTicketsNeps();
        const responseACS = await getTicketsACS();
        const responseTechnicianNeps = await getTechniciansNeps();
        const responseTechnicianACS = await getTechniciansACS();

        const ticketsIDsort = (a, b) => {
          return b.id - a.id;
        };

        const casesSort = (a, b) => {
          return b.cases - a.cases;
        };

        setTicketsNeps(responseNeps.data.tickets.sort(ticketsIDsort));
        setTechniciansNeps(
          responseTechnicianNeps.data.technicians.sort(casesSort)
        );

        setTicketsACS(responseACS.data.tickets.sort(ticketsIDsort));
        setTechniciansACS(
          responseTechnicianACS.data.technicians.sort(casesSort)
        );

        playSoundForTickets(ticketsACS, ticketsNeps)
      } catch (error) {
        console.log(error);
      }
    };

    
    fetchTicketsNeps();

    const intervalId = setInterval(fetchTicketsNeps, 30000);
    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <section className="section__table">
        <TableContainer
          title={"Helpdesk ACS"}
          link={linkAcs}
          linkTicket={linkAcsTicket}
          data={ticketsACS}
        />
        <TableContainer
          title={"Helpdesk Nueva EPS"}
          link={linkNeps}
          linkTicket={linkNepsTicket}
          data={ticketsNeps}
        />
      </section>
      <section className="technicia__section">
        <TechniciansSection
          techniciansAcs={techniciansACS}
          techniciansNeps={techniciansNeps}
        />
      </section>
    </>
  );
}

export default App;
