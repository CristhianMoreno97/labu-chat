<script lang="ts">
	import BubbleHost from "$lib/bubbleHost.svelte";
    import BubbleAssistant from "$lib/bubbleAssistant.svelte";
	import type { list } from "postcss";

    import {messageFeedStore, type Message} from '../store';

    let messageFeed: Message[] = [];

    messageFeedStore.subscribe((data: Message[]) => {
        messageFeed = data;
    });

</script>


<section class="w-full max-h-[400px] p-4 overflow-y-auto space-y-4">
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