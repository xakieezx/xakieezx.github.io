'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Icons } from '@/components/icons';
import { MainNavItem, navsConfig } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export function MainNav() {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex">
			<Link href="/" className="flex items-center space-x-2 mr-6">
				<Icons.logo className="h-6 w-6" />
				<span className="hidden font-bold md:inline-block">
					{siteConfig.name}
				</span>
			</Link>
			<nav className="flex items-center gap-3 text-sm">
				{navsConfig.mainNav?.map(
					(item: MainNavItem, index: number) =>
						item.href && (
							<span key={index} className="flex gap-3">
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'transition-colors hover:underline hover:underline-offset-4',
										pathname?.startsWith(`/${item.title.toLowerCase()}`)
											? 'text-foreground font-medium'
											: 'text-foreground/60'
									)}
								>
									{item.title}
								</Link>
								{index < navsConfig.mainNav.length - 1 && <span>/</span>}
							</span>
						)
				)}
			</nav>
		</div>
	);
}
