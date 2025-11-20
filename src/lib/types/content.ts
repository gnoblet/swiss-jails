export interface ContentSection {
	id: string;
	title?: string;
	content: string[];
	layout?: 'default' | 'card';
	cardStyle?: 'card-border' | 'card-dash';
	cardSize?: 'card-xs' | 'card-sm' | 'card-md' | 'card-lg' | 'card-xl';
	borderSize?: 0 | 1 | 2 | 4 | 8;
}

export interface SiteContent {
	sections: ContentSection[];
}
