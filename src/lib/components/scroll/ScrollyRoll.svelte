<!--
  ScrollyRoll.svelte

  Purpose:
  - High-level, generic scrolly container that composes
    `@sveltejs/svelte-scroller` to provide `background` and
    `foreground` slots. This component is chart-agnostic — supply any
    visuals into the `background` slot.

  Props & Bindings:
  - `top`, `threshold`, `bottom` (numbers): pass-through thresholds for
    the scroller behavior.
  - Forwarded scroller bindings: `count`, `index`, `offset`, `progress`.
    These are `export let` so parent components can `bind:` to them.

  Structure & Styling:
  - Renders a `Scroller` with background and foreground slots. Use the
    `background` slot to render any visual (charts, images, illustrations)
    that should remain behind the scrolled steps.

  Notes:
  - Keep scroller parameter defaults in sync with the layout's
    behavior.
  
  Use:
  - Example usage (slots + binding):
    - <ScrollyRoll charts={['bar','waffle']} bind:index>;
      <ScrollyBackground slot="background">;
      <div slot="foreground">...foreground ScrollyStep components...</div>;
    </ScrollyRoll>
-->

<script lang="ts">
  import Scroller from '@sveltejs/svelte-scroller';

  export let top: number = 0.1;
  export let threshold: number = 0.5;
  export let bottom: number = 0.9;

  // Forwarded scroller bindings (allow parent to bind:index etc.)
  export let count: number;
  export let index: number = 0;
  export let offset: number;
  export let progress: number;
</script>

<div>
  <Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
    <div slot="background">
      <slot name="background" />
    </div>

    <div slot="foreground">
      <slot />
    </div>
  </Scroller>
</div>
