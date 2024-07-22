import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { MainNav } from './main-nav';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="flex h-14 w-full justify-between items-center">
				<MainNav />
				<MobileNav />
				<Link href="/">
					<span className="font-bold md:hidden">{siteConfig.name}</span>
				</Link>
				<ThemeToggle />
			</nav>
		</header>
	);
}
