<script lang="ts">
  import BarChart from '$lib/components/BarChart.svelte';
  import WaffleVertical from '$lib/components/WaffleVertical.svelte';
  import { detentionBarData } from '$lib/data/bar_detention';

  export let chart: 'bar' | 'waffle' = 'bar';
  export let pointerEvents: boolean = false;
</script>

<div class="w-full h-screen flex items-center justify-center" class:pointer-events-none={!pointerEvents}>
  {#if chart === 'bar'}
    <BarChart data={detentionBarData} />
  {:else}
    <WaffleVertical data={detentionBarData} />
  {/if}
</div>
