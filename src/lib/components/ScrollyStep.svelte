<script lang="ts">
  export let className: string = '';
</script>

<section class={
  `scroller-foreground-step min-h-screen flex items-center justify-center px-4 ${className}`
}>
  <div class="scroller-card bg-base-100/95 text-base-content shadow-lg rounded-xl p-6 max-w-md w-[90vw]">
    <slot />
  </div>
</section>
