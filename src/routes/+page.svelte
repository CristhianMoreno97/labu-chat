


<script lang='ts'>
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