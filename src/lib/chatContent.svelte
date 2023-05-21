<script lang="ts">
    import { chatRoomMessages, type Message } from '../store';
	import { afterUpdate } from 'svelte';
	import BubbleHost from "$lib/bubbleHost.svelte";
    import BubbleAssistant from "$lib/bubbleAssistant.svelte";

    let messages: Message[] = [];
	let bubbleElement: HTMLElement;

	// Subscribe to changes in the chat room messages
    chatRoomMessages.subscribe((data: Message[]) => {
        messages = data;
    });

	// Execute after the component updates
	afterUpdate(() => {
		if (messages) scrollToBottom(bubbleElement);
	})
	
	// Watch for changes in the messages array and the bubbleElement reference
	$: {
		if (messages && bubbleElement) {
			scrollToBottom(bubbleElement);
		}
	}

	// Scroll the message bubbles container to the bottom
	async function scrollToBottom(node: HTMLElement) {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	}
</script>



<section id="message-bubbles" bind:this={bubbleElement} class="w-full max-h-[800px] p-4 overflow-y-auto space-y-4">
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