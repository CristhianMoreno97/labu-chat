<script lang="ts">
    import type { ChatBubble } from "./types/chatBubble";
    import { Avatar } from "@skeletonlabs/skeleton";

    export let bubble: ChatBubble;
</script>



<div class="grid grid-cols-[auto_1fr] gap-2">
	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
	<div class="card p-4 rounded-tl-none space-y-2 {bubble.color}">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.content}</p>
	</div>
</div>