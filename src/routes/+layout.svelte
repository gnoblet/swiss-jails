<script lang="ts">
	import './layout.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<title>Les prisons suisses | Swiss Jails</title>
	<meta name="description" content="Explorez les données sur les prisons suisses. Visitez Parlons Prisons pour en savoir plus." />
	<meta name="keywords" content="prisons, suisse, swiss, jail, système carcéral, Parlons Prisons" />
	
	<!-- Open Graph / Facebook / LinkedIn / Bluesky -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Les prisons suisses | Swiss Jails" />
	<meta property="og:description" content="Explorez les données sur les prisons suisses. Visitez Parlons Prisons pour en savoir plus." />
	<meta property="og:site_name" content="Swiss Jails" />
	<meta name="author" content="Guillaume Noblet" />
	
	<!-- Twitter / X -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Les prisons suisses | Swiss Jails" />
	<meta property="twitter:description" content="Explorez les données sur les prisons suisses. Visitez Parlons Prisons pour en savoir plus." />
	<meta name="twitter:creator" content="@gnoblet.bsky.social" />
	
	<link rel="icon" href={`${base}/favicon.svg`} />
</svelte:head>

<div class="flex justify-center min-h-screen">
	<div class="w-full max-w-4xl px-4 lg:px-8">
		{@render children()}
	</div>
</div>
