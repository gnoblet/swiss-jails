// filepath: /home/gnoblet/Documents/Codeberg/swiss-jails/src/lib/types/waffle.ts

export type WaffleDatum = {
    /**
     * Required, stable identifier / variable name (e.g. for i18n keys).
     * Also used as a fallback axis label when `label` is not provided.
     */
    var: string;

    /**
     * Required value for the waffle cell count.
     */
    value: number;

    /**
     * Optional label to display on the axis or tooltip.
     * If omitted, `label` will be used instead.
     */
    var_label_long?: string;

    /**
     * Optional short label to display on the axis or tooltip.
     * If omitted, `label` will be used instead.
     */
    var_label_short?: string;

    /**
     * Optional grouping key for grouped waffles.
     * All cells with the same `group` belong to the same series.
     */
    group?: string;

    /**
     * Optional human‑readable label for the group/series.
     */
    group_label?: string;
};

export type WaffleSeries = WaffleDatum[];