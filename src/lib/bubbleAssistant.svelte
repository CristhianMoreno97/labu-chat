
<script lang="ts">

	import type { Message } from "$lib/types/message"
    import { Avatar } from "@skeletonlabs/skeleton";

    export let message: Message; 

</script>


<div class="grid grid-cols-[1fr_auto] gap-2">
	<div class="card p-4 rounded-tr-none space-y-2 {message.color}">
		<header class="flex justify-between items-center">
			<p class="font-bold">{message.name}</p>
			<small class="opacity-50">{message.timestamp}</small>
		</header>
		<p>{message.content}</p>
	</div>
	<Avatar class="p-2" src="{message.src}" width="w-12" background={message.color}/>
</div>