<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import ScrollerInteractiveForeground from '$lib/components/scroll/ScrollerInteractiveForeground.svelte';
	import LoremIpsum from '$lib/components/LoremIpsum.svelte';
	import DraggableLabel from '$lib/components/DraggableLabel.svelte';
    import Intro from './outline/intro/_INTRO.svelte';

	// svelte-scroller bindings
	let index: number;
	let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;

	// custom components to inject into specific foreground steps
	const customSteps = [
		{ index: 1, component: ScrollerInteractiveForeground, props: {} },
	];
</script>


<Header />

<!-- styles for scroller steps moved to `ScrollyStep.svelte` -->

<div class="w-full">
	<!-- Detention intro scrolly -->
	<LoremIpsum />

	<Intro {top} {threshold} {bottom} bind:index />

	<LoremIpsum />

  <DraggableLabel bind:value={top} label="top" />
  <DraggableLabel bind:value={threshold} label="threshold" />
  <DraggableLabel bind:value={bottom} label="bottom" />
</div>

<Footer />