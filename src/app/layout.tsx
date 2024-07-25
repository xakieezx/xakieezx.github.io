import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'akieez',
	description: 'Nextjs app',
	icons: {
		icon: '/site/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative flex flex-col mx-auto justify-center min-h-screen w-full max-w-3xl bg-background pl-2 pr-2">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
