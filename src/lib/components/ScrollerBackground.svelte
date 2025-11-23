<script lang="ts">
import BarChart from '$lib/components/BarChart.svelte';
import WaffleVertical from '$lib/components/WaffleVertical.svelte';
import { detentionBarData } from '$lib/data/bar_detention';

// Accepts a prop for which chart to show
export let chart: 'bar' | 'waffle';
</script>

{#if chart === 'bar'}
  <BarChart data={detentionBarData} orientation="horizontal" />
{:else if chart === 'waffle'}
  <WaffleVertical data={detentionBarData} />
{/if}
