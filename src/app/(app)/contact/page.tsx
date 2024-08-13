import { ButtonLink } from '@/components/button-link';
import { siteConfig } from '@/config/site';
import { Mail, Phone } from 'lucide-react';

export default function Page() {
	return (
		<div className="flex flex-col max-w-7xl mx-auto">
			<div className="mt-20 text-4xl md:text-5xl font-medium tracking-tighter">
				Contact
			</div>
			<p className="text-justify mt-20">
				If you&apos;d like to hire me or just want to chat, feel free to send me
				an email or WhatsApp me.
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
		</div>
	);
}
