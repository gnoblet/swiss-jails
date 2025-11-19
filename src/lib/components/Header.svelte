<script>
	function scrollToContent() {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="hero min-h-96">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-6xl font-bold">Welcome to SvelteKit</h1>
			<p class="py-6 text-lg">
				Visit <a href="https://svelte.dev/docs/kit" class="link link-primary"
					>svelte.dev/docs/kit</a
				>
				to read the documentation
			</p>
			<button 
				class="btn btn-ghost btn-outline btn-lg" 
				onclick={scrollToContent}
			>
				Explore Swiss Jails
			</button>
		</div>
	</div>
</div>
