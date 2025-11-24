<!--
  ScrollyBackground.svelte

  Purpose:
  - Background container for scrolly pages that renders a full-viewport
    chart behind the foreground content. Keeps charts non-interactive
    and centered within the viewport.

  Props:
  - `chart: 'bar' | 'waffle'` : selects which background visualization to
    render. The chart components consume `detentionBarData` from the
    shared data module.

  Structure & Styling:
  - The outer container is `fixed` and covers the entire viewport
    (`inset-0`) so the background chart remains stationary while the
    foreground scroller moves above it.
  - `pointer-events-none` is intentionally omitted here to allow chart
    interactions only when desired; wrap chart content with
    `pointer-events-none` if you want the background to be fully
    non-interactive.
  - The chart containers use `w-full h-screen flex items-center
    justify-center` to center content and ensure the charts scale to
    the viewport height.
  
  Use:
  - Example:
    - &lt;ScrollyBackground&gt;&lt;ScrollyVisuals charts={['bar','waffle']} index={index} /&gt;&lt;/ScrollyBackground&gt;
-->

<script lang="ts">
/**
 * Generic background wrapper for scrolly pages.
 * Accepts content via the default slot and keeps it fixed behind
 * the foreground scroller. This component is intentionally chart-
 * agnostic; pass any visual component into its slot.
 */
export let ariaLabel: string = 'scrolly-background';
</script>

<div class="fixed inset-0 z-0 flex items-center justify-center bg-transparent" aria-label={ariaLabel}>
  <slot />
</div>
