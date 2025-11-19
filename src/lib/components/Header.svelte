<script>
	function scrollToContent() {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-7xl font-bold">Swiss Jails Are Jails As Others</h1>
			<p class="py-6 text-3xl">
				Visit <a href="https://parlonsprisons.noblogs.org/" class="link link-primary"
					>Parlons Prisons</a
				>
				to read their manifest
			</p>
			<button 
				class="btn btn-outline btn-lg" 
				onclick={scrollToContent}
			>
				Explore Swiss Jails
			</button>
		</div>
	</div>
</div>
