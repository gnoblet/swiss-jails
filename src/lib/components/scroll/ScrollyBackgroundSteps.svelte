<!--
  ScrollyBackgroundSteps.svelte

  Purpose:
  - Renders a sequence of background steps into the scrolly's
    `background` slot using `ScrollyStep` with `variant='background'`.
  - Accepts an array of simple contents or a slot for full control.

  Props:
  - `steps?: Array<{ chart?: 'bar'|'waffle', caption?: string, pointerEvents?: boolean }>`

  Use:
  - Example: &lt;ScrollyBackgroundSteps steps={[{chart:'bar', caption:'Overview'},{chart:'waffle'}]} /&gt;
-->

<script lang="ts" context="module">
  export type BackgroundStep = { chart?: 'bar' | 'waffle'; caption?: string; pointerEvents?: boolean };
</script>

<script lang="ts">
  import ScrollyStep from './ScrollyStep.svelte';
  import ScrollyVisualSingle from './ScrollyVisualSingle.svelte';

  export let steps: BackgroundStep[] = [];
</script>

{#if steps && steps.length}
  {#each steps as s}
    <ScrollyStep variant="background">
      <ScrollyVisualSingle chart={s.chart ?? 'bar'} pointerEvents={s.pointerEvents ?? false} />
      {#if s.caption}
        <div class="absolute bottom-8 text-center w-full text-sm text-base-content/80">{s.caption}</div>
      {/if}
    </ScrollyStep>
  {/each}
{:else}
  <slot />
{/if}
