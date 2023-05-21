<script lang="ts">
	import { afterUpdate } from 'svelte';
	import BubbleHost from "$lib/bubbleHost.svelte";
    import BubbleAssistant from "$lib/bubbleAssistant.svelte";
	import type { list } from "postcss";
    import {chatRoomContent, type Message} from '../store';

    let messageFeed: Message[] = [];

    chatRoomContent.subscribe((data: Message[]) => {
        messageFeed = data;
    });

	let bubbleElement: HTMLElement;
	
	afterUpdate(() => {
		if (messageFeed) scrollToBottom(bubbleElement);
	})

	$: {
		if(messageFeed && bubbleElement) {
			scrollToBottom(bubbleElement);
		}
	}

	async function scrollToBottom(node: HTMLElement) {
		node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
	}

</script>


<section bind:this={bubbleElement} class="w-full max-h-[800px] p-4 overflow-y-auto space-y-4">
	{#each messageFeed as bubble, i}
		{#if bubble.host === true}
			<!-- Host Message Bubble -->
			<!-- <pre>host: {JSON.stringify(bubble, null, 2)}</pre> -->
            <BubbleAssistant bubble={bubble} />
        {:else}
			<!-- Guest Message Bubble -->
			<!-- <pre>guest: {JSON.stringify(bubble, null, 2)}</pre> -->
            <BubbleHost bubble={bubble} />
		{/if}
	{/each}
	
</section>