<!--
  ScrollyStep.svelte

  Purpose:
  - A single step container for the scrolly/scroll-driven narrative.
  - Centers its content vertically and horizontally and provides a
    themed card to present step content.

  Props:
  - `className: string` (optional) : additional utility classes to apply
    to the outer `<section>` (useful to tweak alignment, spacing, or
    visibility per step).

  Structure:
  - Outer `<section>`: full viewport minimum height, flex centering,
    padding, and accepts `className` for per-step overrides.
  - Inner `.card`: daisyUI/Tailwind `card` used to match the site's
    card theme. We intentionally keep explicit sizing (`max-w-md`,
    `w-[90vw]`) and `shadow-lg` to preserve the original look.
  - `<slot />` is where step-specific content is rendered.

  Styling notes:
  - Uses Tailwind + daisyUI utility classes instead of component-local
    CSS so the component inherits theme tokens (colors, content
    color). The background is `bg-white` to ensure a fully opaque
    surface across themes.
  - Keep size/shadow as-is to match the design constraints.

  Accessibility:
  - The component does not add interactive controls itself. Keep any
    interactive content inside the slotted children accessible (focus
    management, ARIA attributes) as appropriate.

  Usage example:
  <ScrollyStep className="bg-none">...step content...</ScrollyStep>
-->

<script lang="ts">
  /**
   * `variant` determines how the step is rendered inside the scrolly.
   * - `'foreground'` (default): renders a centered, themed card.
   * - `'background'`: renders a full-viewport centered container for
   *   visuals (no card), suitable for background imagery/visuals.
   */
  export let className: string = '';
  export let variant: 'foreground' | 'background' = 'foreground';
</script>

{#if variant === 'foreground'}
  <section class={`min-h-screen flex items-center justify-center px-4 ${className}`}>
    <div class="card bg-white text-base-content p-6 max-w-md w-[90vw] shadow-lg ring-1 ring-base-300">
      <div class="card-body p-0">
        <slot />
      </div>
    </div>
  </section>
{:else}
  <!-- Background variant: full-viewport container for visuals. -->
  <section class={`w-full h-screen flex items-center justify-center ${className}`} aria-hidden="true">
    <slot />
  </section>
{/if}
