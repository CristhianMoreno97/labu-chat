/**
 * Obtiene la fecha actual en formato dd/mm/yyyy.
 * @returns La fecha actual en formato dd/mm/yyyy.
 */
export function getCurrentDay(): string {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Obtiene la hora actual en formato hh:mm.
 * @returns La hora actual en formato hh:mm.
 */
export function getCurrentTime(): string {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return formatTime(hours, minutes);
}

/**
 * Obtiene la hora actual en formato hh:mm AM/PM.
 * @returns La hora actual en formato hh:mm AM/PM.
 */
export function getCurrentTime12(): string {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = formatHours12(hours);
    const formattedMinutes = formatMinutes(minutes);
    return `${formattedHours}:${formattedMinutes} ${period}`;
}

/**
 * Formatea las horas en formato de 12 horas.
 * @param hours Las horas.
 * @returns Las horas formateadas en formato de 12 horas.
 */
function formatHours12(hours: number): string {
    hours = hours % 12 || 12;
    return hours.toString().padStart(2, '0');
}

/**
 * Formatea los minutos.
 * @param minutes Los minutos.
 * @returns Los minutos formateados.
 */
function formatMinutes(minutes: number): string {
    return minutes.toString().padStart(2, '0');
}

/**
 * Formatea las horas y los minutos en formato hh:mm.
 * @param hours Las horas.
 * @param minutes Los minutos.
 * @returns Las horas y los minutos formateados en formato hh:mm.
 */
function formatTime(hours: number, minutes: number): string {
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
}