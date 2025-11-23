<script lang="ts">
    import { Plot, RuleY, WaffleY, groupX} from 'svelteplot';
	import WaffleVertical from './WaffleVertical.svelte';
	import { detentionBarData } from '$lib/data/bar_detention';

</script>


<div class="my-8 bg-base-200 p-6">
    <WaffleVertical data={detentionBarData} />
</div>