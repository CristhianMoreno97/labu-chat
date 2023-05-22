


<script lang="ts">
	import {chatRoomMessages, type Message} from '../store';
	import {postChatbotRequest} from '$lib/api/chatbot';

	/**
	 * Handles the keydown event when a user presses a key.
	 * If the Enter key is pressed, a new message is added to the chat room content.
	 * @param keyboardEvent The keyboard event object.
	 */
	async function handleKeyDown(keyboardEvent: KeyboardEvent): Promise<void> {		
		if (keyboardEvent.key === 'Enter') {
			const inputElement = keyboardEvent.target as HTMLInputElement; // util: get object name: console.log(event.target?.constructor.name);
			const userMessageContent = inputElement?.value.trim(); 
			inputElement.value = '';

			if (userMessageContent === '') return;

			const newUserMessage: Message = {
				id: 0,
				host: true,
				avatar: 48,
				name: 'Jane',
				timestamp: 'Yesterday @ 2:30pm',
				content: userMessageContent,
				color: 'variant-soft-primary',
			};
			chatRoomMessages.update((messages) => [...messages, newUserMessage]);

			try {
				const response = await postChatbotRequest(userMessageContent);
				const wizardMessageContent = response.message;
				const newWizardMessage: Message = {
					id: 1,
					host: false,
					avatar: 14,
					name: 'Michael',
					timestamp: 'Yesterday @ 2:45pm',
					content: wizardMessageContent,
					color: 'variant-soft-primary',
				};
				console.log(response);
				chatRoomMessages.update((messages) => [...messages, newWizardMessage]);
			} catch (error) {
				console.log('Error:', error);
			}
		}
	}
</script>



<label class="label">
	<span>Prompt</span>
	<input 
		id="prompt-input"
		class="input"
		type="text"
		placeholder="Input"
		on:keydown={handleKeyDown}
	/>
</label>