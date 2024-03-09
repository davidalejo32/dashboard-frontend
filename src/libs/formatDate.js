export const formatDate = (date) => {
  // Convertir la cadena de fecha a un objeto de fecha
  const dateObj = new Date(date);

  // Extraer día, mes y año
  let day = dateObj.getUTCDate();
  let month = dateObj.getUTCMonth() + 1; // Los meses en JavaScript se indexan desde 0
  const year = dateObj.getUTCFullYear();

  // Añadir ceros a la izquierda si es necesario
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  // Formatear la fecha como "día-mes-año"
  const fechaFormateada = day + "-" + month + "-" + year;

  return fechaFormateada;
};
