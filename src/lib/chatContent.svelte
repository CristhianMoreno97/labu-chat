


<script lang="ts">
    import { chatRoomMessages, type Message } from '../store';
	import { afterUpdate } from 'svelte';
	import BubbleHost from "$lib/bubbleHost.svelte";
    import BubbleAssistant from "$lib/bubbleAssistant.svelte";

	let messages: Message[] = [];
	let messageBoxNode: HTMLElement | null = null;


	/**
	 * Suscribe a los cambios en los mensajes de la sala de chat.
	 */
	function subscribeToChatRoomMessages() {
		chatRoomMessages.subscribe((newMessages: Message[]) => {
			updateMessageList(newMessages);
		});
	}

	/**
	 * Actualiza la lista de mensajes y realiza el desplazamiento hacia abajo.
	 * @param newMessages - Nuevos mensajes de la sala de chat.
	 */
	function updateMessageList(newMessages: Message[]) {
		messages = newMessages;
		scrollToBottom();
	}

	/**
	 * Realiza el desplazamiento hacia abajo en el contenedor de mensajes.
	 */
	function scrollToBottom(){
		if (messages && messageBoxNode) {
			messageBoxNode.scroll({ top: messageBoxNode.scrollHeight, behavior: 'smooth' });
		}
	}

	/**
	 * Método de devolución de llamada ejecutado después de que el componente se actualiza.
	 * Realiza el desplazamiento hacia abajo en el contenedor de mensajes.
	 */
	function afterUpdateCallback() {
		scrollToBottom();
	}
	
	subscribeToChatRoomMessages()
	
	afterUpdate(() => {
		if (messages) {
			afterUpdateCallback();
		}
	})
</script>



<section id="message-box" bind:this={messageBoxNode} class="w-full max-h-[800px] p-4 overflow-y-auto space-y-4">
	{#each messages as bubble, i}
		{#if bubble.host === true}
			<BubbleAssistant bubble={bubble} />
			<!-- <pre>host: {JSON.stringify(bubble, null, 2)}</pre> -->
        {:else}
			<BubbleHost bubble={bubble} />
			<!-- <pre>guest: {JSON.stringify(bubble, null, 2)}</pre> -->
		{/if}
	{/each}
</section>