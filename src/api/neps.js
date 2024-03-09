import axios from "axios";

const API = "http://localhost:3000/api";

export const getTicketsNeps = () => axios.get(`${API}/neps/tickets`)
export const getTechniciansNeps = () => axios.get(`${API}/neps/technicians`)


