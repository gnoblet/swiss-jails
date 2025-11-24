<script lang="ts">
import BarChart from '$lib/components/BarChart.svelte';
import WaffleVertical from '$lib/components/WaffleVertical.svelte';
import { detentionBarData } from '$lib/data/bar_detention';

// Accepts a prop for which chart to show
export let chart: 'bar' | 'waffle';
</script>

<div class="fixed inset-0 z-0 flex items-center justify-center bg-transparent">
  {#if chart === 'bar'}
    <div class="w-full h-screen flex items-center justify-center">
      <BarChart data={detentionBarData} />
    </div>
  {:else if chart === 'waffle'}
    <div class="w-full h-screen flex items-center justify-center">
      <WaffleVertical data={detentionBarData} />
    </div>
  {/if}
</div>
