<script lang="ts" module>
    import { Plot, WaffleX } from 'svelteplot';
    export {type WaffleDatum, type WaffleSeries} from '$lib/types/waffle';

</script>


<script lang="ts">

    import type { WaffleSeries } from '$lib/types/waffle';
    export let data: WaffleSeries = [];

</script>


<!-- <div class="w-full overflow-x-auto"> -->
<Plot 
    height={400}
    color={{ legend: true }}>
    <!-- <RuleY data={[0]} /> -->
    <WaffleX 
        data={data}
        y = 'var_short_label'
        x = 'value' 
        fill = 'var_short_label'
        sort={{ channel: '-x' }}
        gap={2}
    />
</Plot>
<!-- </div> -->
