'use client';

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface HeroSectionProps {}
const phrases = [
	{ x: 'ideas', y: 'reality' },
	{ x: 'concepts', y: 'designs' },
	{ x: 'imagination', y: 'innovation' },
	{ x: 'challenges', y: 'solutions' },
];

export function HeroSection({}: HeroSectionProps) {
	const [index, setIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
				setFade(true);
			}, 500); // Duration of fade-out transition
		}, 3000); // Change text every 3 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex flex-col md:flex-row gap-2 text-center md:text-start text-5xl md:text-6xl font-medium tracking-tighter">
			<h1>Turning </h1>
			<h1
				className={cn(
					'transition-all duration-500 text-red-500',
					fade ? 'opacity-100' : 'opacity-0'
				)}
			>
				{phrases[index].x}
			</h1>
			<h1>into</h1>
			<h1
				className={cn(
					'transition-all duration-500 text-blue-500',
					fade ? 'opacity-100' : 'opacity-0'
				)}
			>
				{phrases[index].y}
			</h1>
		</div>
	);
}
