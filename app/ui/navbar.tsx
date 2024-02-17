'use client';
import Element from "@/app/ui/navbar/element";
import { HeartIcon, HomeIcon, UserCircleIcon, PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface Props {
	className?: string;
}

export default function Navbar({ className }: Props) {
	const links = [
		{
			label: 'Главная',
			href: '/rent',
			icon: HomeIcon
		},
		{
			label: 'Избранное',
			href: '/rent/favorites',
			icon: HeartIcon,
		},
		{
			label: 'Разместить',
			href: '/rent/add',
			icon: PlusIcon
		},
		{
			label: 'Поиск',
			href: '/rent/find',
			icon: MagnifyingGlassIcon
		},
		{
			label: 'Профиль',
			href: '/rent/profile',
			icon: UserCircleIcon
		},
	];

	return (
		<div className={className}>
				<Element links={links} />
		</div>
	)
}
