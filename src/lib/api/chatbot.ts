import type {PostChatbotRequest} from '$lib/types/postChatbotRequest';
import { PUBLIC_CHATBOT_API_URL_BASE, PUBLIC_CHATBOT_CHAT_ENDPOINT } from '$env/static/public';

/**
 * Sends a POST request to the specified URL with a message payload.
 * @param message The message to be sent in the request.
 * @returns A promise that resolves to the response data of type `PostChatbotRequest`.
 * @throws An error if the POST request fails or encounters an error during processing.
 */
export async function postChatbotRequest(message: string): Promise<PostChatbotRequest> {
    try {
        const urlChatbot = new URL(PUBLIC_CHATBOT_CHAT_ENDPOINT, PUBLIC_CHATBOT_API_URL_BASE);
        const response = await fetch(urlChatbot, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });

        if (!response.ok) {
            throw new Error('Post request failed');
        }

        const json = await response.json();
        return json as PostChatbotRequest;
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}