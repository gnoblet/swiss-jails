import type { BarSeries } from '$lib/types/bar';

export const detentionBarData: BarSeries = [
	{
		var: 'detention_provisoire',
		var_label: 'Détention provisoire et pour des motifs de sûreté',
        var_short_label: 'Détention provisoire',
        group: 'detention_provisoire',
		value: 2211
	},
	{
		var: 'execution_anticipee',
		var_label: "Exécution anticipée des peines et des mesures",
        var_short_label: 'Exécution anticipée',
        group: 'execution_anticipee',
		value: 1199
	},
	{
		var: 'execution_peines',
		var_label: "Exécution des peines et des mesures",
        var_short_label: 'Exécution des peines',
        group: 'execution_peines',
		value: 3163
	},
	{
		var: 'mesures_contrainte_etrangers',
		var_label:
			"Mesures de contrainte selon la loi fédérale sur les étrangers et l'intégration",
        var_short_label: 'Mesures de contrainte (LEI)',
        group: 'mesures_contrainte_etrangers',
		value: 220
	},
	{
		var: 'autres_types',
		var_label: 'Autres types de détention',
        var_short_label: 'Autres',
        group: 'autres_types',
		value: 201
	}
];
