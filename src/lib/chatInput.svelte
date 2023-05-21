<script lang="ts">

	import {chatRoomContent, type Message} from '../store';

	/**
	 * Handles the keydown event when a user presses a key.
	 * If the Enter key is pressed, a new message is added to the chat room content.
	 * @param event The keyboard event object.
	 */
	function handleKeyDown(keyboardEvent: KeyboardEvent): void {		
		if (keyboardEvent.key === 'Enter') {
			const inputElement = keyboardEvent.target as HTMLInputElement; // get object name: console.log(event.target?.constructor.name);
			const messageContent = inputElement?.value.trim(); 
			inputElement.value = '';

			if (messageContent === '') return; // do nothing if message is empty

			const newMessage: Message = {
				id: 0,
				host: true,
				avatar: 48,
				name: 'Jane',
				timestamp: 'Yesterday @ 2:30pm',
				content: messageContent,
				color: 'variant-soft-primary',
			};	
			
			chatRoomContent.update((messages) => [...messages, newMessage]);
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