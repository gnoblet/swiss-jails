<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import { introContent as content } from '$lib/data/content_intro';
	import BarChart from '$lib/components/BarChart.svelte';
	import { detentionBarData } from '$lib/data/bar_detention';
</script>

<Header />

<div id="content" class="py-16 px-4">
	<div class="prose mx-auto">
		<h2>Personnes détenues selon le type de détention</h2>
		<p class="text-sm text-base-content/70">
			Nombre de personnes détenues par type de détention (données fournies).
		</p>
		<div class="my-8 bg-base-200 p-6">
			<BarChart data={detentionBarData} />
		</div>

		{#each content.sections as section}
			<Section {section} />
		{/each}
	</div>
</div>

<Footer />