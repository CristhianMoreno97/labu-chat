<!-- layout structure: two columns with various sections for search, list, footer, chat content, and chat input. -->


<div id="columns" class="w-full grid grid-cols-[auto_1fr] gap-1 h-full">
	<div id="left-rows" class="bg-primary-50/20 p-4">
		<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
			<div id="empty-section-1" class="bg-section p-4"></div>
			<div id="chat-info" class="bg-section p-4">
				<slot name="chat-info"></slot>
			</div>
			<div id="empty-section-3" class="bg-section p-4"></div>
		</div>
	</div>
	<div id="right-rows" class="bg-secondary-100/90 p-4">
		<div class="h-full grid grid-rows-[1fr_auto] gap-1">
			<div id="chat-content" class="bg-section p-4 overflow-y-auto">
                <slot name="chat-content">(chat content)</slot>
            </div>
			<div id="chat-input" class="bg-section p-4">
				<slot name="chat-input">(prompt)</slot>
			</div>
		</div>		
	</div>
</div>

<style>
	.bg-section {
		background-color: var(--surface-500);
	}
</style>