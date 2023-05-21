<!-- layout structure: two columns with various sections for search, list, footer, chat content, and chat input. -->


<div id="columns" class="w-full grid grid-cols-[auto_1fr] gap-1 h-full">
	<div id="left-rows" class="bg-surface-500/30 p-4">
		<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
			<div id="empty-section-1" class="bg-surface-500/30 p-4">(search)</div>
			<div id="empty-section-2" class="bg-surface-500/30 p-4">(list)</div>
			<div id="empty-section-3" class="bg-surface-500/30 p-4">(footer)</div>
		</div>
	</div>
	<div id="right-rows" class="bg-surface-500/30 p-4">
		<div class="h-full grid grid-rows-[1fr_auto] gap-1">
			<div id="chat-content" class="bg-surface-500/30 p-4 overflow-y-auto">
                <slot name="chat-content">(chat content)</slot>
            </div>
			<div id="chat-input" class="bg-surface-500/30 p-4">
				<slot name="chat-input">(prompt)</slot>
			</div>
		</div>		
	</div>
</div>