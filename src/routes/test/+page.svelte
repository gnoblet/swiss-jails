<script lang="ts">
    import { Scroller } from '@reuters-graphics/graphics-components';

    // Background
    import ScrollyVisualSingle from '$lib/components/scroll/ScrollyVisualSingle.svelte';
    
    // Array of step objects that define the steps in your scroller.
    const steps = [
        {
            background: ScrollyVisualSingle,
            backgroundProps: { chart: 'bar', pointerEvents: false },
            foreground: '#### Step 1\n\nLorem dddipsum red',
            altText: 'Red background',
        },
        {
            background: ScrollyVisualSingle,
            backgroundProps: { chart: 'bar', pointerEvents: false },
            foreground: '#### Step 2\n\nLorem ipsum blue',
            altText: 'Blue background',
        },
        {
            background: ScrollyVisualSingle,
            backgroundProps: { chart: 'waffle', pointerEvents: false },
            foreground: '#### Step 3\n\nLorem ipsum green',
            altText: 'Green background',
        },
    ];
</script>

<Scroller {steps}/>