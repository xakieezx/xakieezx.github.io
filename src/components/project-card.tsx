'use client';

import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ProjectCardDetails } from '@/config/project';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { LaptopMinimal, Smartphone, SquareArrowOutUpRight } from 'lucide-react';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Icons } from './icons';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

interface ProjectCardProps {
	project: ProjectCardDetails;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

	const [view, setView] = useState('desktop');

	const toggleView = () => {
		setView(view === 'desktop' ? 'mobile' : 'desktop');
	};
	return (
		<Carousel
			opts={{ loop: true }}
			plugins={[plugin.current]}
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<Card>
				<CardHeader className="pb-0">
					<CardTitle>
						<div className="flex justify-between items-center">
							<p>{project.title}</p>
							<Button
								onClick={toggleView}
								variant="ghost"
								size="icon"
								className="relative transition-all"
							>
								<LaptopMinimal
									className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
										view === 'desktop'
											? 'rotate-0 scale-100'
											: '-rotate-90 scale-0'
									}`}
								/>
								<Smartphone
									className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
										view === 'desktop'
											? 'rotate-90 scale-0'
											: 'rotate-0 scale-100'
									}`}
								/>
								<span className="sr-only">Toggle view</span>
							</Button>
						</div>
					</CardTitle>
					<CardDescription>{project.description}</CardDescription>
				</CardHeader>
				<CardContent className="p-0">
					<CarouselContent>
						{project.images.map((item, index) => (
							<CarouselItem key={index} className="pl-10 pr-6 pt-4 pb-4">
								<div className="h-full w-full flex flex-col items-center gap-4">
									<div
										className={cn(
											'rounded-lg relative flex items-center justify-center h-[300px] w-full',
											view === 'desktop' ? 'w-full' : 'w-[200px]'
										)}
									>
										{(view === 'desktop' && !item.srcDesktop) ||
										(view === 'mobile' && !item.srcMobile) ? (
											<div className="relative w-[50px] h-[50px] max-w-full max-h-full">
												<Icons.imagePlaceholder />
											</div>
										) : (
											<div className="relative w-full h-full max-w-full max-h-full">
												<Image
													loader={imageLoader}
													src={
														view === 'desktop'
															? item.srcDesktop
															: item.srcMobile
													}
													alt={item.caption}
													layout="fill"
													objectFit="contain"
													className={cn(
														'rounded-lg transition-all hover:scale-105'
													)}
												/>
											</div>
										)}
									</div>
									<div className="flex items-center justify-center w-full">
										<p className="text-xs text-muted-foreground">
											{item.caption}
										</p>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-2" />
					<CarouselNext className="right-2" />
				</CardContent>
				<CardFooter>
					<div className="flex justify-between items-center w-full">
						<div className="flex flex-col text-xs text-muted-foreground">
							<p>{project.footer1}</p>
							<p>{project.footer2}</p>
						</div>
						<div className="flex gap-2">
							<Link href="/project/eazygas">
								<div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary hover:underline hover:underline-offset-4">
									<p>Read more</p>
									<SquareArrowOutUpRight className="h-4 w-4" />
								</div>
							</Link>
						</div>
					</div>
				</CardFooter>
			</Card>
		</Carousel>
	);
}
