'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export interface Link {
	label: string;
	href: string;
	icon: React.ElementType;
};

interface Props {
	links: Link[];
}

export default function Element({ links }: Props) {
	const pathname = usePathname();
	return (
		<>
			{links.map(link => (
				<Link
					key={link.label}
					href={pathname === link.href ? '#' : link.href}
					className={clsx(
						'h-14 rounded-xl flex md:my-2 flex-row items-center justify-center md:h-14 md:w-full md:flex-row md:px-4',
						{
							'bg-blue-200 hover:bg-blue-200 w-fit px-4': pathname === link.href,
						},
						{
							'w-14 bg-gray-100 hover:bg-blue-200': pathname !== link.href,
						},
					)}>
						<link.icon className={clsx(
							'w-8 h-8 text-blue-500',
							{
								'md:hidden': link.href !== "/home" && link.href !== "/profile",
							}
						)} />
						<label className={clsx(
							'text-sm text-blue-500 mx-2 hover:cursor-pointer',
							{
								'hidden md:block': pathname !== link.href,
							},
							{
								'md:hidden': link.href === "/home" || link.href === "/profile",
							},
						)}>{link.label}</label>
					</Link>
			))}
		</>
	);
};
