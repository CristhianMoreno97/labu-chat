
<div class="w-full grid grid-cols-[auto_1fr] gap-1">
	
	<div class="bg-surface-500/30 p-4">
		<div class="h-full grid grid-rows-[auto_1fr_auto] gap-1">
			<div class="bg-surface-500/30 p-4">(search)</div>
			<div class="bg-surface-500/30 p-4">(list)</div>
			<div class="bg-surface-500/30 p-4">(footer)</div>
		</div>
	</div>

	<div class="bg-surface-500/30 p-4">
		<div class="h-full grid grid-rows-[1fr_auto] gap-1">
			<div class="bg-surface-500/30 p-4 overflow-y-auto">
                <slot name="chat-content">
                    (feed)
				</slot>
            </div>
			<div class="bg-surface-500/30 p-4">
				<slot name="chat-input">
					(prompt)
				</slot>
			</div>
		</div>		
	</div>
</div>