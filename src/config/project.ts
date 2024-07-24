export interface ProjectCardImage {
	srcDesktop: string;
	srcMobile: string;
	caption: string;
}

export interface ProjectCardDetails {
	title: string;
	description: string;
	footer1: string;
	footer2: string;
	images: ProjectCardImage[];
}

export interface ProjectCardConfig {
	[key: string]: ProjectCardDetails;
}

// empty srcDesktop and srcMobile will load image-placholder.svg
export const projectCardConfig: ProjectCardConfig = {
	eazygas: {
		title: 'EazyGas',
		description: 'Gas Inventory Management',
		footer1: 'Chemical Management Unit (CMU)',
		footer2: 'Universiti Teknologi Malaysia',
		images: [
			{
				srcDesktop: '',
				srcMobile: '',
				caption: 'Caption',
			},
		],
	},
};
