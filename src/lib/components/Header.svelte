<script lang="ts">
	import { onMount } from 'svelte';

	// Function to smoothly scroll to the content section
	function scrollToContent() {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
	}

	// Set up auto-scroll and wheel scroll behaviors when component mounts
	onMount(() => {
		// Timer for automatic scroll after 5 seconds of inactivity
		const autoScrollTimer = setTimeout(() => {
			scrollToContent();
		}, 5000); // 5000ms = 5 seconds

		// Handler for mouse wheel scroll events
		const handleWheel = (e: WheelEvent) => {
			// Check if user is scrolling down (positive deltaY)
			if (e.deltaY > 0) {
				// Scroll to content section
				scrollToContent();
				// Remove the wheel event listener after first scroll down
				// This prevents the handler from interfering with normal scrolling
				window.removeEventListener('wheel', handleWheel);
			}
		};

		// Attach wheel event listener to window
		window.addEventListener('wheel', handleWheel);

		// Cleanup function that runs when component is destroyed
		// This prevents memory leaks and removes event listeners
		return () => {
			clearTimeout(autoScrollTimer); // Cancel the auto-scroll timer
			window.removeEventListener('wheel', handleWheel); // Remove wheel listener
		};
	});
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
