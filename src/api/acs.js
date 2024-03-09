import axios from "axios";

const API = "http://localhost:3000/api";

export const getTicketsACS = () => axios.get(`${API}/acs/tickets`)
export const getTechniciansACS = () => axios.get(`${API}/acs/technicians`)
