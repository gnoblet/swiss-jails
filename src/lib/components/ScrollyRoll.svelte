<script lang="ts">
  import Scroller from '@sveltejs/svelte-scroller';
  import Intro_BarChartDentention from '$lib/components/Intro_BarChartDentention.svelte';

  export let top: number = 0.1;
  export let threshold: number = 0.5;
  export let bottom: number = 0.9;

  export let charts: ('bar' | 'waffle')[] = ['bar', 'bar', 'waffle', 'bar', 'waffle'];

  // Forwarded scroller bindings (allow parent to bind:index etc.)
  export let count: number;
  export let index: number = 0;
  export let offset: number;
  export let progress: number;

  let currentChart: 'bar' | 'waffle' = 'bar';
  $: currentChart = index != null ? (charts[index] ?? 'bar') : 'bar';
</script>

<div>
  <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
    <div slot="background">
      <Intro_BarChartDentention chart={currentChart} />
    </div>

    <div slot="foreground">
      <slot />
    </div>
  </Scroller>
</div>
