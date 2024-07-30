'use client';

import { cn } from '@/lib/utils';
import { Copy, Mail } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface ButtonLinkProps {
	placeholder: string;
	link: string;
	copy: string;
	icon: ReactNode;
}

export function ButtonLink({ placeholder, link, copy, icon }: ButtonLinkProps) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(copy);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	return (
		<div className="flex gap-1 items-start">
			<Link target="_blank" href={link}>
				<div className="relative flex gap-1 items-center group">
					{icon}
					<p>{placeholder}</p>
					<div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
				</div>
			</Link>
			<div className="flex">
				<Copy
					className={cn(
						'h-3 w-3 text-muted-foreground text-zinc-200 hover:text-zinc-400 hover:cursor-pointer',
						copied && 'text-zinc-400'
					)}
					onClick={handleCopy}
				/>
				{copied && (
					<p className="ml-2 text-[10px] tracking-tighter text-zinc-400 bg-red-100">
						Copied!
					</p>
				)}
			</div>
		</div>
	);
}
