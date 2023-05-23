


<script lang='ts'>
	import Chat from '$lib/chat.svelte';
	import ChatContent from '$lib/chatContent.svelte';
	import ChatInput from '$lib/chatInput.svelte';
	import ChatInfo from '$lib/chatInfo.svelte';
</script>



<main class="h-full">
	<Chat>
		<ChatInfo slot="chat-info"></ChatInfo>
		<ChatContent slot="chat-content"></ChatContent>
		<ChatInput slot="chat-input"></ChatInput>
	</Chat>
</main>