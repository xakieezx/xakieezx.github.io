export interface ProjectCardImage {
	srcDesktop: string;
	srcMobile: string;
	video?: boolean;
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
				srcDesktop:
					'https://utfs.io/f/EEoJHWKJaHuwBAmHwTQuJTQFN10k3nqOmAKc247pVMrlGWXC',
				srcMobile:
					'https://utfs.io/f/EEoJHWKJaHuw6CoXNbnV2H9PSolNsgU3tdmLFu8yq1kX5bCG',
				caption: 'Sign in page',
			},
			{
				srcDesktop:
					'https://utfs.io/f/EEoJHWKJaHuww4rqvgXy7wgczd6vhTXbWfV4MoxNLsRCFjUH',
				srcMobile:
					'https://utfs.io/f/EEoJHWKJaHuwOCwVshyF0DAhf6L8wCoZxamORlEWI2PHBNT3',
				caption: 'Sign up page',
			},
			{
				srcDesktop:
					'https://utfs.io/f/EEoJHWKJaHuwsdOjCHhb52gxADJTwOdveWRoHi3SBafh8FqU',
				srcMobile:
					'https://utfs.io/f/EEoJHWKJaHuwAWoYaY4zCFEcpHvxSdWQX5Zm6JqIf0GBLnaT',
				caption: 'Forgot password page',
			},
			{
				srcDesktop:
					'https://utfs.io/f/EEoJHWKJaHuwPjNyMPRy6pVo34ki9mlTeuDq0aEGKvdhxYXS',
				srcMobile:
					'https://utfs.io/f/EEoJHWKJaHuwrw2h6MI8xZmQMf7waS6YGCyOhDW5lTupXeqP',
				video: true,
				caption: 'Dashboard preview',
			},
		],
	},
};
