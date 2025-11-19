<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex justify-center min-h-screen">
	<div class="w-full max-w-3xl px-4">
		{@render children()}
	</div>
</div>
