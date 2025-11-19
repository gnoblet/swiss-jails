<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import { siteContent } from '$lib/data/content';
</script>

<Header />

<div id="content" class="py-16 px-4">
	<div class="prose mx-auto">
		{#each siteContent.sections as section}
			<Section {section} />
		{/each}
	</div>
</div>

<Footer />

<!-- 
<Header bgcolor="#206095" bgfixed={true} theme="dark" center={false} short={true}>
	<h1>This is the title of the article</h1>
	<p class="text-big" style="margin-top: 5px">
		This is a short text description of the article that might take up a couple of lines
	</p>
	<p style="margin-top: 20px">
		DD MMM YYYY
	</p>
	<p>
		<Toggle label="Animation {animation ? 'on' : 'off'}" mono={true} bind:checked={animation}/>
	</p>
	<div style="margin-top: 90px;">
		<Arrow color="white" {animation}>Scroll to begin</Arrow>
	</div>
</Header> -->