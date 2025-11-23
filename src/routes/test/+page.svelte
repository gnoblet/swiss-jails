<script lang="ts">
    import { Scroller } from '@reuters-graphics/graphics-components';

    // Background
    import Intro_BarChartDentention from '$lib/components/Intro_BarChartDentention.svelte';
    
    // Array of step objects that define the steps in your scroller.
    const steps = [
        {
            background: Intro_BarChartDentention,
            backgroundProps: { chart: 'bar' },
            foreground: '#### Step 1\n\nLorem dddipsum red',
            altText: 'Red background',
        },
        {
            background: Intro_BarChartDentention,
            backgroundProps: { chart: 'bar' },
            foreground: '#### Step 2\n\nLorem ipsum blue',
            altText: 'Blue background',
        },
        {
            background: Intro_BarChartDentention,
            backgroundProps: { chart: 'waffle' },
            foreground: '#### Step 3\n\nLorem ipsum green',
            altText: 'Green background',
        },
    ];
</script>

<Scroller {steps}/>