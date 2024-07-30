import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { Icons } from './icons';

export function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full max-w-7xl mx-auto">
			<div className="flex items-center justify-between h-14 ">
				<p className="text-balance text-center text-xs leading-loose text-muted-foreground md:text-left">
					{siteConfig.name} © {year}
				</p>
				<div className="flex items-center gap-2">
					<Link target="_blank" href={siteConfig.links.email}>
						<Icons.mail className="h-4 w-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-100 transition-all duration-300 ease-in-out " />
					</Link>
					<Link target="_blank" href={siteConfig.links.github}>
						<Icons.gitHub className="h-4 w-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-100 transition-all duration-300 ease-in-out" />
					</Link>
					<Link target="_blank" href={siteConfig.links.twitter}>
						<Icons.twitter className="h-4 w-4 text-slate-500 dark:text-slate-400 hover:text-slate-900 hover:dark:text-slate-100 transition-all duration-300 ease-in-out" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
