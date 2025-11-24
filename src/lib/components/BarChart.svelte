<script lang="ts" module>
	import { Plot, BarX } from 'svelteplot';
	export { type BarSeries } from '$lib/types/bar';

</script>

<script lang="ts">

    import type { BarSeries } from '$lib/types/bar';
    export let data: BarSeries = [];

</script>

<Plot 
    height={400}
    color={{ legend: true }}>
    <!-- <RuleY data={[0]} /> -->
    <BarX 
        data={data}
        y = 'var_short_label'
        x = 'value' 
        fill = 'var_short_label'
        sort={{ channel: '-x' }}
    />
</Plot>

