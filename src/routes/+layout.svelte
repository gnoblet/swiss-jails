<script lang="ts">
	export const prerender = true;

	import './layout.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/favicon.svg`} />
</svelte:head>

<div class="flex justify-center min-h-screen">
	<div class="w-full max-w-3xl px-4">
		{@render children()}
	</div>
</div>
