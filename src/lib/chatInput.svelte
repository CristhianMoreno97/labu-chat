


<script lang="ts">
	import type { Message } from "$lib/types/message"
	import { chatRoomMessages } from '../store';
	import { postChatbotRequest } from '$lib/api/chatbot';

	/**
	 * Envía un nuevo mensaje del usuario al chat.
	 * @param userMessageContent El contenido del mensaje del usuario.
	 */
	function sendUserMessage(userMessageContent: string): void {
		const newUserMessage: Message = {
			id: 0,
			host: true,
			avatar: 48,
			name: 'Usuario UPTC',
			timestamp: 'Yesterday @ 2:30pm',
			content: userMessageContent,
			color: 'variant-filled-tertiary',
			src: "https://cdn-icons-png.flaticon.com/512/3652/3652506.png"
		};
		chatRoomMessages.update((messages) => [...messages, newUserMessage]);
	}

	/**
	 * Envía una solicitud al chatbot y agrega la respuesta al chat.
	 * @param userMessageContent El contenido del mensaje del usuario.
	 */
	async function handleChatbotResponse(userMessageContent: string): Promise<void> {
		try {
			const response = await postChatbotRequest(userMessageContent);
			const wizardMessageContent = response.message;
			const newWizardMessage: Message = {
				id: 1,
				host: false,
				avatar: 14,
				name: 'Ramiro Chat',
				timestamp: 'Yesterday @ 2:45pm',
				content: wizardMessageContent,
				color: 'variant-filled-primary',
				src: "https://cdn-icons-png.flaticon.com/512/4712/4712010.png",
			};
			console.log(response);
			chatRoomMessages.update((messages) => [...messages, newWizardMessage]);
		} catch (error) {
			console.log('Error:', error);
			// TODO Mostrar mensaje de error al usuario o proporcionar notificación
		}
	}

	/**
	 * Maneja el evento keydown cuando el usuario presiona una tecla.
	 * Si se presiona la tecla Enter, se agrega un nuevo mensaje al contenido del chat.
	 * @param keyboardEvent El objeto de evento de teclado.
	 */
	async function handleKeyDown(keyboardEvent: KeyboardEvent): Promise<void> {	
		if (keyboardEvent.key === 'Enter') {
			const inputElement = keyboardEvent.target as HTMLInputElement; // util: get object name: console.log(event.target?.constructor.name);
			const userMessageContent = inputElement?.value.trim(); 
			inputElement.value = '';

			if (userMessageContent === '') return;

			sendUserMessage(userMessageContent);
			await handleChatbotResponse(userMessageContent);
		}
	}
</script>



<label class="label">
	<span></span>
	<input 
		id="prompt-input"
		class="input variant-form-material"
		type="text"
		placeholder="Escriba un mensaje..."
		on:keydown={handleKeyDown}
	/>
</label>



<style>
	input {
		color: black;
	}
</style>