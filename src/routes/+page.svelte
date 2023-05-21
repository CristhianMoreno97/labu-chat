<script lang='ts'>
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';
	
	import ProductCard from "$lib/productCard.svelte";
	import Chat from '$lib/chat.svelte';
	import ChatContent from '$lib/chatContent.svelte';
	import ChatInput from '$lib/chatInput.svelte';

</script>



<main class="h-full">
	<Chat>
		<ChatContent slot="chat-content"></ChatContent>
		<ChatInput slot="chat-input"></ChatInput>
	</Chat>
</main>
