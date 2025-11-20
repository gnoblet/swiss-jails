<script lang="ts">
	// Import onMount for lifecycle management
	import { onMount } from 'svelte';

	// Function to smoothly scroll to the content section
	function scrollToContent() {
		document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
	}
	// Import icons 
	import { ChevronsDown } from '@lucide/svelte';

	// State for showing restore position toast
	let showRestorePrompt = false;
	let savedScrollPosition = 0;

	function restorePosition() {
		window.scrollTo({ top: savedScrollPosition, behavior: 'smooth' });
		showRestorePrompt = false;
	}

	function dismissPrompt() {
		showRestorePrompt = false;
		localStorage.removeItem('scrollPosition');
	}

	// Set up auto-scroll and wheel scroll behaviors when component mounts
	// This also handles restoring scroll position if available
	onMount(() => {
		// Check if there's a saved scroll position
		const saved = localStorage.getItem('scrollPosition');
		if (saved && parseInt(saved) > 100) {
			savedScrollPosition = parseInt(saved);
			showRestorePrompt = true;
		}
		
		// Scroll to top on page load
		window.scrollTo(0, 0);
		
		// Save scroll position before page unload
		const saveScrollPosition = () => {
			localStorage.setItem('scrollPosition', window.scrollY.toString());
		};
		window.addEventListener('beforeunload', saveScrollPosition);

		// Cleanup function that runs when component is destroyed
		// This prevents memory leaks and removes event listeners
		return () => {
			window.removeEventListener('beforeunload', saveScrollPosition);
		};
	});
</script>

<div class="hero min-h-screen">
	<div class="hero-content text-center">
		<div class="max-w-lg">
			<h1 class="text-7xl font-bold">Les prisons suisses sont des prisons comme les autres</h1>
			<p class="py-6 text-3xl">
				Visitez <a href="https://parlonsprisons.noblogs.org/" class="link link-primary">Parlons Prisons</a> pour lire leur manifeste
			</p>
			<div class="flex justify-center">
				<!-- New button layout with icon container -->
				<!-- - centered button -->
				<!-- - minimum height set to 32 to ensure enough space for icon -->
				 <!-- - flex for column layout -->
				
				<button class="btn btn-outline btn-lg flex flex-col items-center min-h-20" onclick={scrollToContent}>
					<span>Explorer les prisons suisses</span>
					<!-- class for icon container to set size -->
					 <!-- set to 1/3 of parent div height -->
					<div class="h-1/3">
						<ChevronsDown class="w-full h-full"/>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

<!-- If there's a saved scroll position, show the restore prompt toast -->
{#if showRestorePrompt}
	<div class="toast toast-top toast-center">
		<div class="alert alert-info flex-col gap-2">
			<span>Reprendre où vous étiez ?</span>
			<div class="flex gap-2">
				<button class="btn btn-sm btn-primary" onclick={restorePosition}>Oui</button>
				<button class="btn btn-sm btn-ghost" onclick={dismissPrompt}>Non</button>
			</div>
		</div>
	</div>
{/if}
