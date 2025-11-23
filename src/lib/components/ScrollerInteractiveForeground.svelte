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
