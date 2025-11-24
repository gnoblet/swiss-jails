<!--
  ScrollyVisuals.svelte

  Purpose:
  - A small helper component that maps a `charts` array and a current
    `index` to a visual component (e.g. BarChart or WaffleVertical).
  - Keeps chart-selection logic out of the scrolly container so the
    scrolly components remain generic.

  Props:
  - `charts: ('bar'|'waffle')[]` : list of chart types for each step.
  - `index: number` : current step index (used to pick the chart).
  - `pointerEvents: boolean` : when `false` the visuals will be
    non-interactive (`pointer-events: none`) so foreground controls
    remain reachable; set to `true` if you need chart interaction.
-->

<script lang="ts">
  import BarChart from '$lib/components/BarChart.svelte';
  import WaffleVertical from '$lib/components/WaffleVertical.svelte';
  import { detentionBarData } from '$lib/data/bar_detention';

  export let charts: ('bar' | 'waffle')[] = [];
  export let index: number = 0;
  export let pointerEvents: boolean = false;
  export let captions: string[] = [];

  $: current = charts?.[index] ?? 'bar';
</script>

<div class="w-full h-screen flex items-center justify-center" class:pointer-events-none={!pointerEvents}>
  {#if current === 'bar'}
    <BarChart data={detentionBarData} />
  {:else}
    <WaffleVertical data={detentionBarData} />
  {/if}
  {#if captions && captions[index]}
    <div class="absolute bottom-8 text-center w-full text-sm text-base-content/80">{captions[index]}</div>
  {/if}
</div>
