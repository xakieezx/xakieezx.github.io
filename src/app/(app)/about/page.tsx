'use client';
import { ButtonLink } from '@/components/button-link';
import { Icons } from '@/components/icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Mail, Phone } from 'lucide-react';
import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { GrMysql } from 'react-icons/gr';
import {
	SiGithub,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPrisma,
	SiReact,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si';
import './styles.css';

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Page() {
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5,
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	const isActive = (sectionId: string) => activeSection === sectionId;

	return (
		<div className="aboutPageHeight w-full flex flex-col md:flex-row gap-10 max-w-7xl mx-auto">
			<div className="pt-20 w-full md:w-2/5 flex flex-col">
				<h1 className="text-4xl md:text-5xl font-medium tracking-tighter">
					Hi, I&apos;m Ahmad Fikri
				</h1>
				<div className="flex items-start mt-5 md:mt-10 md:mr-20">
					<h3 className="leading-relaxed">
						A full-stack web developer based in Kuala Lumpur, Malaysia. I&apos;m
						fully committed to helping you achieve your dreams through digital
						solutions.
					</h3>
					<div className="flex-none relative w-[160px] h-[160px] border rounded-3xl ml-6 mb-2">
						<Image
							loader={imageLoader}
							src="/map.png"
							alt="Location of akieez"
							layout="fill"
							objectFit="cover"
							className="rounded-3xl"
						/>
						<div className="w-3 h-3 absolute border border-transparent rounded-full bg-green-500 top-1/2 left-1/2 "></div>
						<div className="w-3 h-3 absolute border border-transparent rounded-full bg-black top-1/2 left-1/2 animate-ping"></div>
						<div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
							<span className="text-[10px] text-slate-700 font-semibold tracking-tighter flex items-center gap-2">
								Kuala Lumpur, Malaysia
								<Icons.flagMalaysia className="inline-flex h-5 w-5 rounded-md" />
							</span>
						</div>
					</div>
				</div>
				<nav className="hidden mt-10 md:flex flex-col gap-2 w-max">
					<Link
						href="#story"
						className={cn(
							`group flex items-center`,
							isActive('story') ? 'active' : ''
						)}
					>
						<span
							className={cn(
								`mr-4 h-px bg-primary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none`,
								isActive('story') ? 'w-16' : 'w-8'
							)}
						/>
						<span className="text-xs font-bold uppercase tracking-widest">
							backstory
						</span>
					</Link>
					<Link
						href="#skills"
						className={cn(
							`group flex items-center`,
							isActive('skills') ? 'active' : ''
						)}
					>
						<span
							className={cn(
								`mr-4 h-px bg-primary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none`,
								isActive('skills') ? 'w-16' : 'w-8'
							)}
						/>
						<span className="text-xs font-bold uppercase tracking-widest">
							skills
						</span>
					</Link>
					<Link
						href="#experience"
						className={cn(
							`group flex items-center`,
							isActive('experience') ? 'active' : ''
						)}
					>
						<span
							className={cn(
								`mr-4 h-px bg-primary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none`,
								isActive('experience') ? 'w-16' : 'w-8'
							)}
						/>
						<span className="text-xs font-bold uppercase tracking-widest">
							experience
						</span>
					</Link>
					<Link
						href="#connect"
						className={cn(
							`group flex items-center`,
							isActive('connect') ? 'active' : ''
						)}
					>
						<span
							className={cn(
								`mr-4 h-px bg-primary transition-all group-hover:w-16 group-hover:bg-primary group-focus-visible:w-16 group-focus-visible:bg-primary motion-reduce:transition-none`,
								isActive('connect') ? 'w-16' : 'w-8'
							)}
						/>
						<span className="text-xs font-bold uppercase tracking-widest">
							Let&apos;s get in touch
						</span>
					</Link>
				</nav>
			</div>
			<ScrollArea className="w-full flex-1 flex flex-col overflow-y-auto tracking-tight pr-4">
				<section id="story" className="pt-20 mb-36">
					<h2 className="text-lg font-bold uppercase tracking-widest mb-4">
						backstory
					</h2>
					<div className="flex-none float-left relative w-[160px] h-[320px] border rounded-3xl mr-6 mb-2">
						<Image
							loader={imageLoader}
							src="/aki.jpeg"
							alt="Picture of akieez"
							layout="fill"
							objectFit="cover"
							className="rounded-3xl"
						/>
					</div>
					<p className="mb-4 text-justify">
						A little backstory, I began my academic career with a degree in
						Chemical Engineering, graduating in 2016. Motivated by a desire to
						deepen my knowledge, I continued doing research in the same field.
						After publishing several papers in Q1 and Q2 journals, managing a
						small team for an exhibition where we got silver and bronze award
						and co-authoring a book chapter, I made a decision to pivot my
						career path at the end of 2019.
					</p>
					<p className="mb-4 text-justify">
						Little did I know that COVID-19 would happen a few months later. The
						next few years were difficult. I explored various roles to stay
						resilient and sought to apply my skills in more diverse and
						practical settings. I worked as a delivery man, sell cookies,
						provide thesis formatting services, freelance work with Microsoft
						Excel skills on freelancer.com, and attempted to teach Excel, among
						other ventures. During these challenging times, I gained many
						valuable lessons and skills.
					</p>
					<p className="mb-4 text-justify">
						In 2022, I transitioned into the world full of codes. With basic
						knowledge of HTML, CSS and JavaScript, I learned more deeply through
						countless sources such as tutorials from YouTube,
						freecodecamp&apos;s core curriculum, informative threads on X.com,
						Twitch stream, etc.
					</p>
					<p className="text-justify">
						In 2023, EazyGas approach me for a suggestion on using Google Sheet
						as their solution. However, after evaluating their needs, I propose
						developing a web application to streamline their workflow.
					</p>
					<p className="mb-4 text-justify">
						Learn more about the case study{' '}
						<span className="underline underline-offset-4">
							<Link href="/project/eazygas">here</Link>
						</span>
						.
					</p>
					<p className="mb-4 text-justify">
						I&apos;m only 2 years into the world of tech but I am super grateful
						to be working in this field. Thanks for reading.
					</p>
				</section>
				<section id="skills" className="mb-36">
					<h2 className="text-lg font-bold uppercase tracking-widest mb-4">
						skills
					</h2>
					<p className="mb-6 text-justify">
						Over the past two years, I&apos;ve developed a diverse set of
						skills, ranging from front-end to back-end development. I approach
						every project with a focus on simplicity and efficient solution that
						enhance user experience.
					</p>
					<div className="mb-6 flex flex-wrap gap-4 items-center justify-center text-zinc-500 text-4xl">
						<SiNextdotjs className="hover:text-black hover:dark:bg-primary hover:dark:rounded-md hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiReact className="hover:text-[#58C4DC] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiTypescript className="hover:text-[#3178C6] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiTailwindcss className="hover:text-[#0EA5E9] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiShadcnui className="hover:text-black hover:dark:bg-primary hover:dark:rounded-md hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiNodedotjs className="hover:text-[#3C873A] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiMongodb className="hover:text-[#00ED64] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiPrisma className="hover:text-black hover:dark:bg-primary hover:dark:rounded-md hover:scale-125 transition-all duration-200 ease-in-out" />
						<GrMysql className="hover:text-[#3E6E93] hover:scale-125 transition-all duration-200 ease-in-out" />
						<SiGithub className="hover:text-black hover:dark:bg-primary hover:dark:rounded-md hover:scale-125 transition-all duration-200 ease-in-out" />
					</div>
					<p className="mb-4 text-justify">
						We never stop learning; I&apos;m always improve my current skills
						and looking forward to add more in the future.
					</p>
				</section>
				<section id="experience" className="mb-36">
					<h2 className="text-lg font-bold uppercase tracking-widest mb-4">
						Experience
					</h2>
					<div className="grid grid-cols-2 mb-12 text-justify">
						<div className="flex flex-col">
							<h3 className="font-semibold tracking-wide">
								Full time freelance
							</h3>
						</div>
						<div className="text-right">
							<p className="text-xs">2022 - Now</p>
						</div>
						<span className="h-px w-full rounded-3xl bg-slate-400 col-span-2 my-2"></span>
						<div>
							<p className="text-sm">Front-end developer</p>
							<p className="text-sm">Back-end developer</p>
							<p className="text-sm">Full-stack developer</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-sm">Currently available for hire.</p>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-12 text-justify">
						<div className="flex flex-col">
							<h3 className="font-semibold tracking-wide">EazyGas</h3>
							<p className="text-xs">Universiti Teknologi Malaysia (UTM)</p>
						</div>
						<div className="text-right">
							<p className="text-xs">2023 - 2024</p>
						</div>
						<span className="h-px w-full rounded-3xl bg-slate-400 col-span-2 my-2"></span>
						<div>
							<p className="text-sm">Full-stack developer</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-sm">
								Building a web application for Gas Inventory Management for
								Chemical Management Unit of UTM.
							</p>
							<p className="text-sm">
								Succesfully solo build the entire web application from designing
								the UI/UX, back-end development, database management, perform
								test, fixing bugs and deploy.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-12 text-justify">
						<div className="flex flex-col">
							<h3 className="font-semibold tracking-wide">Break</h3>
						</div>
						<div className="text-right">
							<p className="text-xs">2020 - 2022</p>
						</div>
						<span className="h-px w-full rounded-3xl bg-slate-400 col-span-2 my-2"></span>
						<div>
							<p className="text-sm">Thesis formatting services</p>
							<p className="text-sm">Delivery man</p>
							<p className="text-sm">Microsoft Excel freelance</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-sm">
								Did a whole lots of things ranging from providing thesis
								formatting services, working as a delivery person, freelance on
								freelancer.com with Microsoft Excel skills, selling cookies and
								others.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 mb-12 text-justify">
						<div className="flex flex-col">
							<h3 className="font-semibold tracking-wide">
								Chemical Engineering
							</h3>
							<p className="text-xs">Universiti Teknologi Malaysia</p>
						</div>
						<div className="text-right">
							<p className="text-xs">2016 - 2019</p>
						</div>
						<span className="h-px w-full rounded-3xl bg-slate-400 col-span-2 my-2"></span>
						<div>
							<p className="text-sm">Research</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-sm">
								Published several papers in Q1 and Q2 journals, managing a small
								team for an exhibition where we got silver and bronze award and
								co-authoring a book chapter.
							</p>
						</div>
					</div>
				</section>
				<section id="connect" className="pt-20 aboutPageHeight">
					<h2 className="mb-4 text-lg font-bold uppercase tracking-widest">
						Let&apos;s get in touch
					</h2>
					<p className="text-justify">
						If you&apos;d like to hire me or just want to chat, feel free to
						send me an email or WhatsApp me.
					</p>
					<p className="mb-10 text-justify">
						I&apos;ll be delighted to hear from you.
					</p>
					<p className="mb-4 text-justify">Contact me via</p>
					<div className="mb-4 flex flex-row items-center gap-2">
						<div className="flex flex-row items-center gap-2">
							<Mail className="h-4 w-4" />
							<p>Email:</p>
						</div>
						<ButtonLink
							placeholder="a.fikrifadzil@gmail.com"
							link={siteConfig.links.email}
							copy={siteConfig.email}
							icon={<></>}
						/>
					</div>
					<div className="mb-4 flex flex-row items-center gap-2">
						<div className="flex flex-row items-center gap-2">
							<Phone className="h-4 w-4" />
							<p>WhatsApp:</p>
						</div>
						<ButtonLink
							placeholder="+60172941760"
							link={siteConfig.links.contact}
							copy={siteConfig.contact}
							icon={<></>}
						/>
					</div>
				</section>
			</ScrollArea>
		</div>
	);
}
