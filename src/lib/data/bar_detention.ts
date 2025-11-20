import type { BarSeries } from '$lib/types/bar';

export const detentionBarData: BarSeries = [
	{
		var: 'detention_provisoire',
		label: 'Détention provisoire et pour des motifs de sûreté',
		value: 2211
	},
	{
		var: 'execution_anticipee',
		label: "Exécution anticipée des peines et des mesures",
		value: 1199
	},
	{
		var: 'execution_peines',
		label: "Exécution des peines et des mesures",
		value: 3163
	},
	{
		var: 'mesures_contrainte_etrangers',
		label:
			"Mesures de contrainte selon la loi fédérale sur les étrangers et l'intégration",
		value: 220
	},
	{
		var: 'autres_types',
		label: 'Autres types de détention',
		value: 201
	}
];
