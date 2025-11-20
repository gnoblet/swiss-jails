import type { SiteContent } from '$lib/types/content';

export const introContent: SiteContent = {
	sections: [
		{
			id: 'introduction',
			title: 'INTRODUCTION',
			content: [
				"L'idée de ce texte, et notre engagement autour des questions pénales et carcérales ont évolué et sont affirmés à partir de nos expériences de vie, de celles de certain·e·x·s proches de détenu·e·x·s, de nos lectures, de nos discussions. C'est le résultat d'un travail collectif, il reflète nos expériences et nos réflexions à Genève, ville où nous vivons et militons."
			]
		},
		{
			id: 'introduction-2',
			layout: 'card',
			title: 'Un titre',
			cardSize: 'card-sm',
			content: [
				"Genève est, en matière pénale et carcérale, le canton qui enferme le plus en Suisse. « Le canton de Genève a non seulement le plus grand nombre absolu de détenus avant jugement, mais également le plus grand nombre relatif, quand les données sont pondérées avec celles de la population. » (FINK D., La prison en Suisse – Un état des lieux, 2017, p. 44). Il existe de nombreux espaces d'enfermement : les prisons, les commissariats, les cellules de l'aéroport et des tribunaux, les institutions psychiatriques, les zones douanières, les centres fédéraux pour requérant·e·x·s d'asile, etc. Ici, nous choisirons de nous concentrer principalement sur les établissements de détention pénale et administrative."
			]
		},
		{
			id: 'introduction-3',
			layout: 'card',
			title: 'Un autre titre',
			cardSize: 'card-sm',
			borderSize: 8,
			content: [
				"Genève est, en matière pénale et carcérale, le canton qui enferme le plus en Suisse. « Le canton de Genève a non seulement le plus grand nombre absolu de détenus avant jugement, mais également le plus grand nombre relatif, quand les données sont pondérées avec celles de la population. » (FINK D., La prison en Suisse – Un état des lieux, 2017, p. 44). Il existe de nombreux espaces d'enfermement : les prisons, les commissariats, les cellules de l'aéroport et des tribunaux, les institutions psychiatriques, les zones douanières, les centres fédéraux pour requérant·e·x·s d'asile, etc. Ici, nous choisirons de nous concentrer principalement sur les établissements de détention pénale et administrative.",
				"Le discours dominant défend la nécessité de la prison en avançant ses fonctions bénéfiques pour la société. Avant de déconstruire les arguments en faveur du système carcéral, il convient d'énoncer que les taux d'incarcération ne sont en réalité pas corrélés au taux de criminalité. Cela signifie que le taux d'incarcération peut augmenter alors que la criminalité de la ville baisse, et inversement. Cela s'explique principalement par le fait que les statistiques de délinquance sont des constructions, elles sont le résultat de politiques pénales, tout comme les décisions d'enfermement. Aux États-Unis, par exemple, le taux d'incarcération a explosé depuis le début des années 80, sans lien avec le taux de criminalité, qui lui est resté stable, voire a baissé (THOPLAN R., 2014). À Genève, les choses sont passablement claires : le procureur général (de concert avec le·la commandant·e·x de police) établit son « plan en matière de sécurité » tous les trois ans. (À titre d'exemple, le plan triennal pour la période 2020-2023 cible nommément les mineur·e·x·s non-accompagné·e·x·s ; « La police ciblera les faux mineurs non accompagnés », TdG, 16,12,2020). Autrement dit, il établit des objectifs politiques de répression ou de maintien de l'ordre, et celles-ci changent en fonction des années. Ce qui influence forcément les statistiques de délinquance. Par exemple, de manière hypothétique, si un·e·x procureur·e·x décide de prioriser l'arrestation des personnes qui volent des vélos, alors plus de moyens seront mis au service d'enquêtes à la suite d'une plainte pour vol de vélo, plus d'efforts seront employés à retrouver les personnes responsables des faits, et elles seront punies plus souvent. Au contraire, si un·e·x autre procureur·e·x n'attache aucune importance à de tels vols, les plaintes n'aboutiront pas et les statistiques seront alors différentes. Ainsi, en fonction des décisions politiques, les politiques pénales varient et modifient en conséquence la population carcérale."
			]
		}
	]
};
