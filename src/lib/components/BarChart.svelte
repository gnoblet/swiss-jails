<script lang="ts" module>
	// Generic D3-based bar chart. Supports:
	// - data defined as BarSeries (array of BarDatum)
	// - optional display label (`label`) with fallback to required `var`
	// - vertical or horizontal orientation
	// It is used by the detention chart, but is reusable for any BarSeries.
	export { type BarDatum, type BarSeries, type BarOrientation, type BarLayout } from '$lib/types/bar';
</script>

<script lang="ts">
	import * as d3 from 'd3';
	import { onMount } from 'svelte';

	import type { BarDatum, BarLayout, BarOrientation, BarSeries, BarSort } from '$lib/types/bar';

	export let data: BarSeries = [];

	// 'vertical' uses value as bar height; 'horizontal' uses value as bar width.
	export let orientation: BarOrientation = 'horizontal';

	// 'grouped' draws bars side by side per x value; 'stacked' stacks by group.
	// Currently reserved for future grouped/stacked logic.
	export const defaultLayout: BarLayout = 'grouped';

	// sort order for bars
	export let sort: BarSort = 'desc';

	let container: HTMLDivElement;

	onMount(() => {
		if (!container) return;

		const baseMargin = { top: 20, right: 20, bottom: 40, left: 80 };
		const wrap_width = 120;
		const margin =
		orientation === 'horizontal'
			? { ...baseMargin, left: wrap_width + 20 } // enough for ~120px wrapped text
			: baseMargin;
		const width = 800 - margin.left - margin.right;
		const height = 400 - margin.top - margin.bottom;

		// Clear previous svg if hot reloading
		container.innerHTML = '';

		const svg = d3
			.select(container)
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', `translate(${margin.left},${margin.top})`);


		// Bars

		// Sort data if needed
		if (sort === 'asc') {
			data.sort((a, b) => a.value - b.value);
		} else if (sort === 'desc') {
			data.sort((a, b) => b.value - a.value);
		}


		// Use var_short_label > var_label > var for axis labels
		const xKey = (d: BarDatum) => d.var_short_label ?? d.var_label ?? d.var;

		// Color scale: one color per group
		const groupIds = Array.from(new Set(data.map((d: BarDatum) => d.group ?? d.var)));
		const color = d3.scaleOrdinal<string, string>()
			.domain(groupIds)
			.range(d3.schemeCategory10);

		// Bars (currently single‑series, non‑stacked; uses orientation)
		if (orientation === 'vertical') {
			const x = d3
				.scaleBand<string>()
				.domain(data.map((d: BarDatum) => xKey(d)))
				.range([0, width])
				.padding(0.2);

			const y = d3
				.scaleLinear()
				.domain([0, d3.max(data, (d: BarDatum) => d.value) ?? 0])
				.nice()
				.range([height, 0]);

			// X axis
			svg
				.append('g')
				.attr('transform', `translate(0,${height})`)
				.call(d3.axisBottom(x))
				.selectAll('text')
				.style('text-anchor', 'end')
				.attr('dx', '-0.8em')
				.attr('dy', '0.15em')
				.attr('transform', 'rotate(-35)');

			// Y axis
			svg.append('g').call(d3.axisLeft(y));

			// Bars
			svg
				.selectAll<SVGRectElement, BarDatum>('rect')
				.data(data)
				.enter()
				.append('rect')
				.attr('x', (d: BarDatum) => x(xKey(d)) ?? 0)
				.attr('y', (d: BarDatum) => y(d.value))
				.attr('width', x.bandwidth())
				.attr('height', (d: BarDatum) => height - y(d.value))
				.attr('fill', (d: BarDatum) => color(d.group ?? d.var));

			// Value labels
			svg
				.selectAll<SVGTextElement, BarDatum>('text.value')
				.data(data)
				.enter()
				.append('text')
				.attr('class', 'text-xs fill-base-content')
				.attr('x', (d: BarDatum) => (x(xKey(d)) ?? 0) + x.bandwidth() / 2)
				.attr('y', (d: BarDatum) => y(d.value) - 4)
				.attr('text-anchor', 'middle')
				.text((d: BarDatum) => d.value.toString());
		} else {
			// horizontal
			const y = d3
				.scaleBand<string>()
				.domain(data.map((d: BarDatum) => xKey(d)))
				.range([0, height])
				.padding(0.2);

			const yAxis = d3.axisLeft(y);
			const yAxisG = svg.append('g').call(yAxis);

			// No label wrapping; use default axis labels

			const x = d3
				.scaleLinear()
				.domain([0, d3.max(data, (d: BarDatum) => d.value) ?? 0])
				.nice()
				.range([0, width]);

			// X axis (value)
			svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));

			// Y axis (categories)
			svg.append('g').call(d3.axisLeft(y));

			// Bars
			svg
				.selectAll<SVGRectElement, BarDatum>('rect')
				.data(data)
				.enter()
				.append('rect')
				.attr('y', (d: BarDatum) => y(xKey(d)) ?? 0)
				.attr('x', 0)
				.attr('height', y.bandwidth())
				.attr('width', (d: BarDatum) => x(d.value))
				.attr('fill', (d: BarDatum) => color(d.group ?? d.var));

			// Value labels
			svg
				.selectAll<SVGTextElement, BarDatum>('text.value')
				.data(data)
				.enter()
				.append('text')
				.attr('class', 'text-xs fill-base-content')
				.attr('y', (d: BarDatum) => (y(xKey(d)) ?? 0) + y.bandwidth() / 2)
				.attr('x', (d: BarDatum) => x(d.value) + 4)
				.attr('alignment-baseline', 'middle')
				.text((d: BarDatum) => d.value.toString());
		}
	});
</script>

<div class="w-full overflow-x-auto">
	<div bind:this={container} class="max-w-full"></div>
</div>
