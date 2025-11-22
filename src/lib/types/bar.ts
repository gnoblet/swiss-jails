export type BarDatum = {

    /**
	 * Required, stable identifier / variable name (e.g. for i18n keys).
	 * Also used as a fallback axis label when `label` is not provided.
	 */
	var: string;


	/**
	 * Required value for the bar height/length.
	 */
	value: number;

	/**
	 * Optional  label to display on the axis or tooltip.
	 * If omitted, `var` will be used instead.
	 */
	var_label?: string;

    /**
     * Optional short label to display on the axis or tooltip.
     * If omitted, `var` will be used instead.
     */
    var_short_label?:  string;


	/**
	 * Optional grouping key for grouped / stacked charts.
	 * All bars with the same `group` belong to the same series.
	 */
	group?: string;

	/**
	 * Optional human‑readable label for the group/series.
	 */
	group_label?: string;
};

export type BarSeries = BarDatum[];

export type BarOrientation = 'vertical' | 'horizontal';

// "stacked" puts series on top of each other; "grouped" dodges them side by side.
export type BarLayout = 'stacked' | 'grouped';

// sort data by value
export type BarSort = 'asc' | 'desc' | 'none';
