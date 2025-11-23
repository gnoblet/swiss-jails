<!--
  ScrollerStep.svelte
  Minimal full-viewport colored step used for demos and background testing.
  Props:
    - `colour` (string): CSS color used as the step background.
  This component intentionally uses a plain div sized to the viewport.
-->

<script lang="ts">
  export let colour: string = 'lightblue';
  // Use Tailwind classes for full-viewport height and width.
</script>

<!-- Full viewport step using Tailwind -->
<div class="w-screen h-screen max-w-full m-0" style={`background: ${colour};`}></div>
