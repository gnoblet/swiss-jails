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

<style>
  /* Styles for the scrolly step card and layout (moved here from +page.svelte)
     These are component-local and won't trigger unused-css warnings in the page. */
  .scroller-foreground-step {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  }

  .scroller-card {
    background: var(--p-bg, #fff);
    color: var(--p-text, #222);
    box-shadow: 0 2px 16px 0 #0002;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    max-width: 500px;
    width: 90vw;
    font-size: 1.2rem;
    font-family: inherit;
  }
</style>
