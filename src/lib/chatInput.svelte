<script lang="ts">
	import {messageFeedStore, type Message} from '../store';

	function handleKeyDown(event: KeyboardEvent) {
		
		if (event.key === 'Enter') {
			// console.log(event.target?.constructor.name);
			const value = (event.target as HTMLInputElement)?.value;

			messageFeedStore.update((data: Message[]) => {
				const newMessage: Message = {
					id: 0,
					host: true,
					avatar: 48,
					name: 'Jane',
					timestamp: 'Yesterday @ 2:30pm',
					message: value,
					color: 'variant-soft-primary'
				};
				console.log(data);		
				return [...data, newMessage];
			});

			(event.target as HTMLInputElement).value = '';
		}

	}
</script>

<label class="label">
	<span>Input</span>
	<input class="input" type="text" placeholder="Input" on:keydown={handleKeyDown}/>
</label>