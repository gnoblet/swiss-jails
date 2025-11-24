<!--
  ScrollyForeground.svelte

  Purpose:
  - Renders a list of `ScrollyStep` components inside the scrolly's
    `foreground` slot. This component provides a convenient API when
    you have an array of step contents, but also supports passing
    custom step markup via the default slot.

  Props:
  - `steps?: Array<{ title?: string, body?: string, meta?: Record<string, any> }>`

  Use:
  - Example: &lt;ScrollyForeground steps={[{title:'Overview',body:'Intro text'},{title:'Details',body:'More'}]} /&gt;
-->

<script lang="ts" context="module">
  export type ForegroundStep = { title?: string; body?: string; meta?: Record<string, any> };
</script>

<script lang="ts">
  import ScrollyStep from './ScrollyStep.svelte';
  export let steps: ForegroundStep[] = [];
  // Optional custom components to inject into specific step indices.
  // Each item: { index: number, component: SvelteComponent, props?: Record<string, any> }
  export let customSteps: Array<{ index: number; component: any; props?: Record<string, any> }> = [];

  // Build a map from index to array of components for quick lookup in template
  let customMap: Map<number, Array<{ component: any; props?: Record<string, any> }>> = new Map();
  $: {
    customMap = new Map();
    for (const c of customSteps) {
      const arr = customMap.get(c.index) ?? [];
      arr.push({ component: c.component, props: c.props });
      customMap.set(c.index, arr);
    }
  }
</script>

<div>
  {#if steps && steps.length}
    {#each steps as s, i}
      <ScrollyStep>
        {#if s.title}
          <h3 class="text-lg font-semibold">{s.title}</h3>
        {/if}
        {#if s.body}
          <p class="mt-2">{@html s.body}</p>
        {/if}
        {#if s.meta}
          <!-- meta can contain custom fields; show nothing by default -->
        {/if}
        {#if customMap.has(i)}
          {#each customMap.get(i) as c}
            <svelte:component this={c.component} {...c.props} />
          {/each}
        {/if}
      </ScrollyStep>
    {/each}
    <!-- Render any custom slotted steps (e.g., interactive step) after structured steps -->
    <slot />
  {:else}
    <slot />
  {/if}
</div>
 
