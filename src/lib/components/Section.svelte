<script lang="ts">
	// Import the ContentSection type definition
	import type { ContentSection } from '$lib/types/content';

	// Receive the section data as a prop from parent component
	export let section: ContentSection;

	// Get the border width class based on borderSize with default of 2
	const borderSize = section.borderSize ?? 2;
	const borderClass = borderSize === 0 ? 'border-0' :
	                     borderSize === 1 ? 'border' :
	                     borderSize === 2 ? 'border-2' :
	                     borderSize === 4 ? 'border-4' :
	                     'border-8';
</script>

<!-- Check if the section should be displayed as a card -->
{#if section.layout === 'card'}
	<!-- Card layout: use daisyUI card component -->
	<div
		class="card {borderClass} border-error {section.cardSize || ''} bg-primary shadow-xl mb-12"
		id={section.id}
	>
		<div class="card-body">
			<!-- Display title if it exists -->
			{#if section.title}
				<h2 class="card-title text-4xl font-bold">{section.title}</h2>
			{/if}
			<!-- Loop through all paragraphs in the content array -->
			{#each section.content as paragraph}
				<p class="mb-4 text-lg">{paragraph}</p>
			{/each}
		</div>
	</div>
{:else}
	<!-- Default layout: render as a regular section element -->
	<section id={section.id} class="mb-12">
		<!-- Display title if it exists -->
		{#if section.title}
			<h2 class="text-4xl font-bold mb-6">{section.title}</h2>
		{/if}
		<!-- Loop through all paragraphs in the content array -->
		{#each section.content as paragraph}
			<p class="mb-4 text-lg">{paragraph}</p>
		{/each}
	</section>
{/if}
