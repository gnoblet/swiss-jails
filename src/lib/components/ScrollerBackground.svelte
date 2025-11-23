<script lang="ts">
import BarChart from '$lib/components/BarChart.svelte';
import WaffleVertical from '$lib/components/WaffleVertical.svelte';
import { detentionBarData } from '$lib/data/bar_detention';

// Accepts a prop for which chart to show
export let chart: 'bar' | 'waffle';
</script>

<div class="scroller-background-wrap">
  {#if chart === 'bar'}
    <div class="scroller-background-content">
      <BarChart data={detentionBarData} />
    </div>
  {:else if chart === 'waffle'}
    <div class="scroller-background-content">
      <WaffleVertical data={detentionBarData} />
    </div>
  {/if}
</div>

<style>
  /* Full-viewport background wrapper so background charts fill the screen
     and sit behind the foreground scroller content. */
  .scroller-background-wrap {
    position: fixed;
    inset: 0; /* top:0; right:0; bottom:0; left:0 */
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* make background non-interactive */
    background: transparent;
  }

  .scroller-background-content {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
