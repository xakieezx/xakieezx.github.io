import { ButtonLink } from '@/components/button-link';
import { HeroSection } from '@/components/hero-changer';
import { Icons } from '@/components/icons';
import { ProjectCard } from '@/components/project-card';
import { projectCardConfig } from '@/config/project';
import { siteConfig } from '@/config/site';
import { Mail, Phone, PhoneCall } from 'lucide-react';
import Link from 'next/link';
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

export default function Home() {
	return (
		<div className="flex flex-col items-center max-w-7xl mx-auto">
			{/* hero */}
			<div className="mt-20">
				<HeroSection />
			</div>
			<div className="mt-10 flex flex-col items-center gap-2">
				<div className="flex gap-1 items-center border border-secondary-foreground rounded-3xl px-2">
					<div className="relative border border-transparent rounded-full bg-green-500 w-2 h-2">
						<div className="h-full w-full absolute border border-transparent rounded-full bg-green-700 top-0 left-0 animate-ping"></div>
					</div>
					<p className="tracking-tighter leading-snug">open for work</p>
				</div>
				<div className="flex gap-10 items-center tracking-tighter">
					<ButtonLink
						placeholder="send me an email"
						link={siteConfig.links.email}
						copy={siteConfig.email}
						icon={<Mail className="h-4 w-4" />}
					/>
					<ButtonLink
						placeholder="give me a call"
						link={siteConfig.links.contact}
						copy={siteConfig.contact}
						icon={<Phone className="h-4 w-4" />}
					/>
				</div>
			</div>

			{/* intro */}
			<div className="mt-20 text-2xl tracking-tighter font-semibold">
				Hello, I&apos;m Ahmad Fikri, a full-stack web developer based in Kuala
				Lumpur, Malaysia{' '}
				<Icons.flagMalaysia className="inline-flex h-8 w-8 rounded-md" />
			</div>
			<div className="mt-5 text-sm">
				I never thought that I enjoyed having a headache while doing all this
				stuff.{' '}
				<Link
					href="/about"
					className="inline-flex gap-1 items-center font-normal underline underline-offset-4"
				>
					<p>Read more about me.</p>
				</Link>
			</div>
			<div className="mt-20 flex flex-wrap gap-4 items-center justify-center text-zinc-500 text-4xl">
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

			{/* featured project */}
			<div className="mt-20 text-2xl tracking-tighter font-semibold">
				Featured project
			</div>
			<div className="w-full mt-5">
				<ProjectCard project={projectCardConfig.eazygas} />
			</div>

			{/* contact */}
			<div className="mt-20 flex flex-col items-center gap-2">
				<div className="flex gap-1 items-center border border-secondary-foreground rounded-3xl px-2">
					<div className="relative border border-transparent rounded-full bg-green-500 w-2 h-2">
						<div className="h-full w-full absolute border border-transparent rounded-full bg-green-700 top-0 left-0 animate-ping"></div>
					</div>
					<p className="tracking-tighter leading-snug">open for work</p>
				</div>
				<div className="flex gap-4 items-center tracking-tighter">
					<ButtonLink
						placeholder="send me an email"
						link={siteConfig.links.email}
						copy={siteConfig.email}
						icon={<Mail className="h-4 w-4" />}
					/>
					<ButtonLink
						placeholder="give me a call"
						link={siteConfig.links.contact}
						copy={siteConfig.contact}
						icon={<Phone className="h-4 w-4" />}
					/>
				</div>
			</div>
		</div>
	);
}
