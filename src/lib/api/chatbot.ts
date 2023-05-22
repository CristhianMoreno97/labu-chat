import type { PostChatbotRequest } from '$lib/types/postChatbotRequest';
import { PUBLIC_CHATBOT_API_URL_BASE, PUBLIC_CHATBOT_API_CHAT_ENDPOINT } from '$env/static/public';

/**
 * Construye la URL completa para la solicitud al chatbot.
 */
function buildChatbotURL(): string {
    const urlChatbot = new URL(PUBLIC_CHATBOT_API_CHAT_ENDPOINT, PUBLIC_CHATBOT_API_URL_BASE);
    return urlChatbot.toString();
}

/**
 * Envia una solicitud POST al chatbot con un mensaje.
 * @param message El mensaje a enviar en la solicitud.
 * @returns Una promesa que se resuelve con los datos de respuesta de tipo `PostChatbotRequest`.
 * @throws Un error si la solicitud POST falla o encuentra un error durante el procesamiento.
 */
export async function postChatbotRequest(message: string): Promise<PostChatbotRequest> {
    try {
        const url = buildChatbotURL();
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error('Post request failed');
        }

        const responseData = await response.json();

        // TODO Realiza validación adicional de la respuesta si es necesario

        return responseData as PostChatbotRequest;
    } catch (error) {
        console.log('Error en la solicitud al chatbot:', error);
        throw error;
    }
}