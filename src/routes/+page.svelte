<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';
	import { introContent as content } from '$lib/data/content_intro';
	import BarChart from '$lib/components/BarChart.svelte';
	import { detentionBarData } from '$lib/data/bar_detention';
	import ScrollyRoll from '$lib/components/ScrollyRoll.svelte';
	import ScrollyStep from '$lib/components/ScrollyStep.svelte';
	import Intro_BarChartDentention from '$lib/components/Intro_BarChartDentention.svelte';
	import ScrollerInteractiveForeground from '$lib/components/ScrollerInteractiveForeground.svelte';
	import LoremIpsum from '$lib/components/LoremIpsum.svelte';
	import DraggableLabel from '$lib/components/DraggableLabel.svelte';

	// svelte-scroller bindings
	let count: number;
	let index: number;
	let offset: number;
	let progress: number;
	let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;

	// mapping of charts for each foreground section
	const charts: ('bar' | 'waffle')[] = ['bar', 'bar', 'waffle', 'bar', 'waffle'];
	let currentChart: 'bar' | 'waffle' = 'bar';
	$: currentChart = index != null ? (charts[index] ?? 'bar') : 'bar';
</script>


<Header />


<style>
.scroller-foreground-step {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
}
.scroller-card {
	background: #fff;
	color: #222;
	box-shadow: 0 2px 16px 0 #0002;
	border-radius: 1rem;
	padding: 2rem 1.5rem;
	max-width: 500px;
	width: 90vw;
	font-size: 1.2rem;
	font-family: inherit;
}
</style>

<div class="w-full">
	<!-- Use the ScrollyRoll / ScrollyStep components -->
	<LoremIpsum />

	<ScrollyRoll {top} {threshold} {bottom} charts={charts} bind:count bind:index bind:offset bind:progress>
		<ScrollyStep>
			<h3 class="text-lg font-semibold">Overview</h3>
			<p class="mt-2">Step 1 — Overview of detained persons by detention type.</p>
		</ScrollyStep>

		<ScrollyStep>
			<h3 class="text-lg font-semibold">Interactive</h3>
			<p class="mt-2">Step 2 — Interactive exploration (try the button).</p>
			<div class="mt-4">
				<ScrollerInteractiveForeground />
			</div>
		</ScrollyStep>

		<ScrollyStep>
			<h3 class="text-lg font-semibold">Waffle view</h3>
			<p class="mt-2">Step 3 — Waffle view of the same data.</p>
		</ScrollyStep>

		<ScrollyStep>
			<h3 class="text-lg font-semibold">More detail</h3>
			<p class="mt-2">Step 4 — Additional context or annotation.</p>
		</ScrollyStep>

		<ScrollyStep>
			<h3 class="text-lg font-semibold">Wrap up</h3>
			<p class="mt-2">Step 5 — Conclusion and call to action.</p>
		</ScrollyStep>
	</ScrollyRoll>

	<LoremIpsum />

  <DraggableLabel bind:value={top} label="top" />
  <DraggableLabel bind:value={threshold} label="threshold" />
  <DraggableLabel bind:value={bottom} label="bottom" />
</div>

<Footer />