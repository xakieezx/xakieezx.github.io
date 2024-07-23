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
import Autoplay from 'embla-carousel-autoplay';
import { LaptopMinimal, Smartphone, SquareArrowOutUpRight } from 'lucide-react';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `/project/eazygas${src}?w=${width}&q=${quality || 75}`;
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
				<CardHeader>
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
				<CardContent>
					<CarouselContent>
						{project.images.map((item, index) => (
							<CarouselItem key={index}>
								<div className="w-full h-full flex flex-col items-center gap-2">
									<Image
										loader={imageLoader}
										src={view === 'desktop' ? item.srcDesktop : item.srcMobile}
										alt={`Image ${index}`}
										width={500}
										height={300}
										className="rounded-lg border border-muted-foreground"
									/>
									<div className="flex justify-between w-full px-10">
										<CarouselPrevious className="static left-0 top-0 translate-y-0" />
										<p className="text-xs text-muted-foreground">
											{item.caption}
										</p>
										<CarouselNext className="static right-0 top-0 translate-y-0" />
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
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
