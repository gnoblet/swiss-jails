
<!--
  ScrollerInteractiveForeground.svelte

  Purpose:
  - A small interactive foreground step used inside the scrolly flow.
  - Demonstrates how to include interactive controls (buttons, inputs)
    inside a scrolly step while keeping the component simple.

  Props:
  - `count: number` (optional): a numeric value shown in the UI and
    incremented locally when the button is clicked. Parent components
    may bind to this prop if they want to react to changes.

  Structure & Styling:
  - Uses a vertical flex column with spacing and padding (`flex`,
    `flex-col`, `gap-4`, `p-6`). All styling uses Tailwind/daisyUI
    utility classes so the component matches the app's design tokens.

  Accessibility:
  - The button is a semantic `button` element and will be keyboard
    focusable. Ensure any slotted or nested interactive content also
    follows accessibility best practices.
  
  Use:
  - Simple usage example:
    - <ScrollerInteractiveForeground count={myCount} >;
-->

<script lang="ts">
  export let count: number = 0;
</script>

<div class="flex flex-col items-center gap-4 p-6">
  <h4 class="text-xl font-semibold">Interactive step</h4>
  <p class="text-base">The count is <strong>{count}</strong></p>
  <button
    class="btn btn-primary"
    on:click={() => {
      count += 1;
    }}
  >
    Click Me
  </button>
</div>
