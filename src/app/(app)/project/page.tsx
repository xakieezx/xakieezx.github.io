import { ProjectCard } from '@/components/project-card';
import { projectCardConfig } from '@/config/project';

export default function Page() {
	return (
		<div className="flex flex-col gap-4">
			<ProjectCard project={projectCardConfig.eazygas} />
		</div>
	);
}
