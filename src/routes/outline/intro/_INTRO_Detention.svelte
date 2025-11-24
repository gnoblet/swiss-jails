<script lang="ts">
  import BarChart from '$lib/components/BarChart.svelte';
  import WaffleVertical from '$lib/components/WaffleVertical.svelte';
  import { detentionBarData } from '$lib/data/bar_detention';
  import ScrollyRoll from '$lib/components/scroll/ScrollyRoll.svelte';
  import ScrollyStep from '$lib/components/scroll/ScrollyStep.svelte';

  // real detention visuals sequence: bar then waffle
  const charts: ('bar' | 'waffle')[] = ['bar', 'waffle'];

  // computed current chart for background
  $: currentChart = charts[index] ?? 'bar';

  // scroller bindings (if used by parent)
  export let index: number;
  export let top = 0.1;
  export let threshold = 0.5;
  export let bottom = 0.9;

  // scroller bindings (exposed internally for the ScrollyRoll)
  let count: number = 0;
  let offset: number = 0;
  let progress: number = 0;
</script>

<div class="w-full">
    <ScrollyRoll {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
      <div slot="background">
        <!-- inlined Intro_BarChartDentention markup -->
        <div class="w-screen h-screen max-w-full m-0 bg-base-100 flex items-center justify-center">
          {#if currentChart === 'bar'}
            <div class="w-full max-w-4xl px-4">
              <BarChart data={detentionBarData} />
            </div>
          {:else if currentChart === 'waffle'}
            <div class="w-full max-w-4xl px-4">
              <WaffleVertical data={detentionBarData} />
            </div>
          {/if}
        </div>
      </div>

      <ScrollyStep>
          <h3 class="text-lg font-semibold">Detention — overview</h3>
          <p class="mt-2">Intro text about detained persons by detention type.</p>
        </ScrollyStep>
      <ScrollyStep>
          <h3 class="text-lg font-semibold">Detention — breakdown</h3>
          <p class="mt-2">Waffle representation of the same data.</p>
        </ScrollyStep>
        <ScrollyStep>
          <h3 class="text-lg font-semibold">Detention — overview</h3>
          <p class="mt-2">What is this?</p>
        </ScrollyStep>
      
    </ScrollyRoll>
</div>
