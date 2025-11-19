import type { SiteContent } from '$lib/types/content';

export const siteContent: SiteContent = {
	sections: [
		{
			id: 'introduction',
			title: 'INTRODUCTION',
			content: [
				"L'idée de ce texte, et notre engagement autour des questions pénales et carcérales ont évolué et sont affirmés à partir de nos expériences de vie, de celles de certain·e·x·s proches de détenu·e·x·s, de nos lectures, de nos discussions. C'est le résultat d'un travail collectif, il reflète nos expériences et nos réflexions à Genève, ville où nous vivons et militons."]
		},
        {
			id: 'introduction-2',
			layout: 'card',
            title: "truc",
			cardStyle: 'card-border',
			cardSize: 'card-sm',
            content: [
				"Genève est, en matière pénale et carcérale, le canton qui enferme le plus en Suisse. « Le canton de Genève a non seulement le plus grand nombre absolu de détenus avant jugement, mais également le plus grand nombre relatif, quand les données sont pondérées avec celles de la population. » (FINK D., La prison en Suisse – Un état des lieux, 2017, p. 44). Il existe de nombreux espaces d'enfermement : les prisons, les commissariats, les cellules de l'aéroport et des tribunaux, les institutions psychiatriques, les zones douanières, les centres fédéraux pour requérant·e·x·s d'asile, etc. Ici, nous choisirons de nous concentrer principalement sur les établissements de détention pénale et administrative."
			]
		},
        {
			id: 'introduction-2',
			layout: 'card',
            title: "truc",
			cardStyle: 'card-dash',
			cardSize: 'card-sm',
            borderSize: 8,
            content: [
				"Genève est, en matière pénale et carcérale, le canton qui enferme le plus en Suisse. « Le canton de Genève a non seulement le plus grand nombre absolu de détenus avant jugement, mais également le plus grand nombre relatif, quand les données sont pondérées avec celles de la population. » (FINK D., La prison en Suisse – Un état des lieux, 2017, p. 44). Il existe de nombreux espaces d'enfermement : les prisons, les commissariats, les cellules de l'aéroport et des tribunaux, les institutions psychiatriques, les zones douanières, les centres fédéraux pour requérant·e·x·s d'asile, etc. Ici, nous choisirons de nous concentrer principalement sur les établissements de détention pénale et administrative."
			]
		}
		// Add more sections here as needed
	]
};
