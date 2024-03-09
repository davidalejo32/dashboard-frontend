import sound from "../assets/sound.mp3"

export function playSound () {
  new Audio(sound).play()
}


export function playSoundForTickets (ticketsACS, ticketsNeps){

  const mergedTickets = ticketsACS.concat(ticketsNeps)


  for (let i = 0; i < mergedTickets.length; i++) {
    // Verificar si el elemento actual tiene status false
    if (mergedTickets[i].status === false) {
        // Imprimir un solo mensaje si se encuentra un status false y salir del bucle
        playSound()
        break;
    }
}
}