<script>

    import { Avatar } from "@skeletonlabs/skeleton";

    export let bubble = {
        id: 0,
        host: true,
        avatar: 48,
        name: 'Jane',
        timestamp: 'Yesterday @ 2:30pm',
        content: 'Some message text.',
        color: 'variant-soft-primary'
    };

</script>


<div class="grid grid-cols-[auto_1fr] gap-2">
	
    <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" width="w-12" />
	
    <div class="card p-4 variant-soft rounded-tl-none space-y-2">
		<header class="flex justify-between items-center">
			<p class="font-bold">{bubble.name}</p>
			<small class="opacity-50">{bubble.timestamp}</small>
		</header>
		<p>{bubble.content}</p>
	</div>
    
</div>