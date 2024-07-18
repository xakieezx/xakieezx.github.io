import { siteConfig } from '@/config/site';

export function Footer() {
	return (
		<footer>
			<div className="flex items-center justify-between gap-4 h-14 ">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					Built by{' '}
					<a
						href={siteConfig.links.twitter}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						akieez
					</a>
					. The source code is available on{' '}
					<a
						href={siteConfig.links.github}
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
}
