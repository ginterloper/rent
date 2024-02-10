'use client';
import Element from "@/app/ui/navbar/element";
import { HomeIcon, PlusIcon, MagnifyingGlassIcon, HeartIcon, UserIcon } from '@heroicons/react/20/solid';

interface Props {
	className?: string;
}

export default function Navbar({ className }: Props) {
	const links = [
		{
			label: 'Главная',
			href: '/',
			icon: HomeIcon
		},
		{
			label: 'Избранное',
			href: '/favorites',
			icon: HeartIcon,
		},
		{
			label: 'Разместить',
			href: '/add',
			icon: PlusIcon
		},
		{
			label: 'Поиск',
			href: '/find',
			icon: MagnifyingGlassIcon
		},
		{
			label: 'Профиль',
			href: '/profile',
			icon: UserIcon
		},
	];

	return (
		<div className={className}>
				<Element links={links} />
		</div>
	)
}
