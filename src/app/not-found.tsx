import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Icons } from '@/components/icons';
import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="relative flex flex-col mx-auto justify-center min-h-screen w-full max-w-3xl bg-background pl-2 pr-2">
			<Header />
			<main className="flex flex-1 justify-center w-full h-full">
				<div className="flex flex-col text-center items-center w-1/2 justify-center gap-4">
					<Icons.brokenLink className="h-12 w-12" />
					<p className="text-lg font-semibold">{`This Page Isn't Available`}</p>
					<p className="text-sm text-muted-foreground">
						{`The link may be broken, or the page may have been removed. Check to
						see if the link you're trying to open is correct.`}
					</p>
					<Link
						href="/"
						className="text-sm underline underline-offset-4 text-primary"
					>
						Return home
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
