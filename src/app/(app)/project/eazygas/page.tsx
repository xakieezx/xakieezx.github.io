'use client';
import { projectCardConfig } from '@/config/project';
import Image from 'next/image';

export default function Page() {
	return (
		<div className="flex flex-col max-w-7xl mx-auto">
			<div className="mt-20 tracking-tighter flex flex-col gap-4 items-center">
				<h1 className="text-4xl md:text-5xl font-medium">EazyGas</h1>
				<div className="flex flex-row gap-4">
					<p className="text-sm text-center py-1 px-2 border rounded-sm dark:hover:text-primary-foreground hover:bg-slate-200 transition-all ease-in-out">
						Solo developer
					</p>
					<p className="text-sm text-center py-1 px-2 border rounded-sm dark:hover:text-primary-foreground hover:bg-slate-200 transition-all ease-in-out">
						Full-stack web application
					</p>
					<p className="text-sm text-center py-1 px-2 border rounded-sm dark:hover:text-primary-foreground hover:bg-slate-200 transition-all ease-in-out">
						June 2023 - July 2024
					</p>
				</div>
			</div>
			{/* hero image */}
			<div className="mt-20 relative w-full h-[300px] md:h-[500px]">
				<Image
					src="https://utfs.io/f/EEoJHWKJaHuwDHo825U2zl1RGeJKi9ZayOF6hn0PqYfUWMpI"
					alt="Picture of akieez"
					fill
					className="rounded-3xl object-cover"
				/>
			</div>
			{/* project description */}
			<div className="flex flex-col items-center w-full">
				<h4 className="mt-20 mb-4 text-xl font-semibold text-center">
					The Problem
				</h4>
				<div className="flex flex-col gap-1 max-w-4xl">
					<p className="text-justify">
						Chemical Management Unit (CMU) is responsible to handle anything
						related to gas in Universiti Teknologi Malaysia (UTM), including
						purchasing, safety, storing, distribution, disposal and others.
					</p>
					<p className="text-justify">
						Previously, they encounter multiple problems such as inconsistent
						inventory tracking, inacurrate data, manual documentation, inventory
						loss, and an inefficient order system, all of which led to larger
						financial problems.
					</p>
					<p className="text-justify">
						CMU currently in possess of a number of unutilised gas that have
						ongoing rental for years, incompetent suppliers taking advantage by
						overcharging, unknown gas ownership, etc. Furthermore, storing and
						renting damaged gas is also a financial waste.
					</p>
				</div>
				<h4 className="mt-20 mb-4 text-xl font-semibold text-center">
					The Solution
				</h4>
				<div className="flex flex-col gap-1 max-w-4xl">
					<p className="text-justify">
						The proposed solution is to develop a web application that aims to
						streamline and facilitate the management of gas for CMU and
						ultimately eliminate all existing problems, with more efficient and
						reliable system.
					</p>
					<p className="text-justify">
						I&apos;m responsible for the entire project-from designing the
						UI/UX, back-end development, database management, perform test,
						fixing bugs and deploy.
					</p>
					<p className="text-justify">
						The web application is build using full-stack framework, Next.js and
						Typescript. NextAuth.js is used for the role-based authentication.
						The UI/UX is mainly from shadcn/ui and the amazing tailwindcss.
					</p>
					<p className="text-justify">
						Initially, MongoDB Atlas is used for the database but migrated to
						Prisma ORM and MySQL due to unforeseen circumstances. The
						application is then deployed on their server using Plesk control
						panel.
					</p>
					<div className="mt-20 relative w-full h-[300px] md:h-[500px]">
						<Image
							src="https://utfs.io/f/EEoJHWKJaHuwBAmHwTQuJTQFN10k3nqOmAKc247pVMrlGWXC"
							alt="Sign in page"
							fill
							className="rounded-sm object-cover"
						/>
					</div>
					<p className="mt-1 text-sm text-center">Role-based authentication</p>
					<div className="mt-20 relative w-full h-[300px] md:h-[500px] rounded-sm">
						<video
							width="100%"
							height="100%"
							controls
							preload="metadata"
							className="rounded-sm h-full"
						>
							<source
								src="/project/eazygas/desktop/admin-crud.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
					<p className="mt-1 text-sm text-center">
						Admin managing Lab of EazyGas (CMS)
					</p>
					<div className="mt-20 relative w-full h-[300px] md:h-[500px] rounded-sm">
						<video
							width="100%"
							height="100%"
							controls
							preload="metadata"
							className="rounded-sm h-full"
						>
							<source
								src="/project/eazygas/desktop/order-fulfilment.mp4#t=0.5"
								type="video/mp4"
							/>
						</video>
					</div>
					<p className="mt-1 text-sm text-center">Order fulfilment features</p>
					<div className="mt-20 relative w-full h-[300px] md:h-[500px] rounded-sm">
						<video
							width="100%"
							height="100%"
							controls
							preload="metadata"
							className="rounded-sm h-full"
						>
							<source
								src="/project/eazygas/desktop/dashboard.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
					<p className="mt-1 text-sm text-center">Dashboard overview</p>
					<div className="mt-20 relative w-full h-[300px] md:h-[500px]">
						<Image
							src="https://utfs.io/f/EEoJHWKJaHuwpifpEcJe6hiRverzxUNbjX27PsIVAwHupm3d"
							alt="Table-inventory"
							fill
							className="rounded-sm object-cover"
						/>
					</div>
					<p className="mt-1 text-sm text-center">Inventory management</p>
				</div>
			</div>
		</div>
	);
}
