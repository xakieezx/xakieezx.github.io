'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
				<Icons.logo className="h-6 w-6" />
				<span className="hidden font-bold md:inline-block">
					{siteConfig.name}
				</span>
			</Link>
			<nav className="flex items-center gap-4 text-sm lg:gap-6">
				<Link
					href="/about"
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/about')
							? 'text-foreground'
							: 'text-foreground/60'
					)}
				>
					About
				</Link>
				<Link
					href="/project"
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/project')
							? 'text-foreground'
							: 'text-foreground/60'
					)}
				>
					Project
				</Link>
				<Link
					href="/contact"
					className={cn(
						'transition-colors hover:text-foreground/80',
						pathname?.startsWith('/contact')
							? 'text-foreground'
							: 'text-foreground/60'
					)}
				>
					Contact
				</Link>
			</nav>
		</div>
	);
}
