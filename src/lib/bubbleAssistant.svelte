
<script lang="ts">

    import { Avatar } from "@skeletonlabs/skeleton";

    type ChatBubble = {
        id: number,
        host: boolean,
        avatar: number,
        name: string,
        timestamp: string,
        content: string,
        color: string,
    };

    export let bubble: ChatBubble = {
        id: 0,
        host: true,
        avatar: 48,
        name: 'Jane',
        timestamp: 'Yesterday @ 2:30pm',
        content: 'Some message text.',
        color: 'variant-soft-primary'
    }; 

</script>


<div class="grid grid-cols-[1fr_auto] gap-2">
	
    <div class="card p-4 rounded-tr-none space-y-2 {bubble.color}">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.content}</p>
	</div>

	<Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
    
</div>
					