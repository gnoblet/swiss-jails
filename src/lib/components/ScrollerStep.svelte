<script lang="ts">
  export let colour: string = 'lightblue';
  // Use Tailwind classes for full-viewport height and width.
</script>

<!-- Full viewport step using Tailwind -->
<div class="w-screen h-screen max-w-full m-0" style={`background: ${colour};`}></div>
