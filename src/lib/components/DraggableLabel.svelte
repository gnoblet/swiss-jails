<!--
  DraggableLabel.svelte
  A small demo helper component that renders a labeled range slider.
  Props:
    - `label` (string): text shown to the left of the slider
    - `value` (number): two-way bound slider value between 0 and 1
  Usage example: `<DraggableLabel bind:value={threshold} label="threshold" />`
-->

<script lang="ts">
  export let label: string = '';
  export let value: number = 0.5;
  // simple slider as a draggable label UI for demo
</script>

<div class="flex items-center gap-4 p-2">
  <label class="w-28 text-sm">{label}</label>
  <input
    type="range"
    min="0"
    max="1"
    step="0.01"
    bind:value
    class="w-48"
  />
  <span class="w-12 text-sm">{(value*100).toFixed(0)}%</span>
</div>
