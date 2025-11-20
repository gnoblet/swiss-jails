<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import { introContent as content } from '$lib/data/content_intro';
</script>

<Header />

<div id="content" class="py-16 px-4">
	<div class="prose mx-auto">
		{#each content.sections as section}
			<Section {section} />
		{/each}
	</div>
</div>

<Footer />