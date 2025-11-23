<script lang="ts">
    import BarChart from '$lib/components/BarChart.svelte';
    import WaffleVertical from '$lib/components/WaffleVertical.svelte';
    import { detentionBarData } from '$lib/data/bar_detention';

    export let chart: 'bar' | 'waffle' = 'bar';
    // allow passing optional class or style via props in future
</script>

<!-- Full-viewport background container to fully cover previous backgrounds -->
<div class="w-screen h-screen max-w-full m-0 bg-base-100 flex items-center justify-center">
    {#if chart === 'bar'}
        <div class="w-full max-w-4xl px-4">
            <BarChart data={detentionBarData} orientation="horizontal" />
        </div>
    {:else if chart === 'waffle'}
        <div class="w-full max-w-4xl px-4">
            <WaffleVertical data={detentionBarData} />
        </div>
    {/if}
</div>