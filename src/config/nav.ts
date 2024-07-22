import { Icons } from '@/components/icons';

export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: keyof typeof Icons;
	label?: string;
}

export interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[];
}

export interface MainNavItem extends NavItem {}

export interface SidebarNavItem extends NavItemWithChildren {}

export interface NavsConfig {
	mainNav: MainNavItem[];
	sidebarNav: SidebarNavItem[];
}

export const navsConfig: NavsConfig = {
	mainNav: [
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Project',
			href: '/project',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	sidebarNav: [
		{
			title: 'Go to',
			items: [
				{
					title: 'EazyGas',
					href: '/project/eazygas',
					items: [],
				},
			],
		},
	],
};
