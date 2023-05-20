<script>
	import BubbleHost from "$lib/bubbleHost.svelte";
    import BubbleAssistant from "$lib/bubbleAssistant.svelte";

    let messageFeed = [
        {
            id: 0,
            host: true,
            avatar: 48,
            name: 'Jane',
            timestamp: 'Yesterday @ 2:30pm',
            message: 'Some message text.',
            color: 'variant-soft-primary'
        },
        {
            id: 1,
            host: false,
            avatar: 14,
            name: 'Michael',
            timestamp: 'Yesterday @ 2:45pm',
            message: 'Some message text.',
            color: 'variant-soft-primary'
        }
	];
	
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