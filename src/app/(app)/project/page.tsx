import { ProjectCard } from '@/components/project-card';
import { projectCardConfig } from '@/config/project';

export default function Page() {
	return (
		<div className="flex flex-col max-w-7xl mx-auto">
			<div className="mt-20 text-4xl md:text-5xl font-medium tracking-tighter">
				Project
			</div>
			<div className="mt-20 flex flex-col w-full gap-4">
				<ProjectCard project={projectCardConfig.eazygas} />
			</div>
		</div>
	);
}
