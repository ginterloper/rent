'use client';
import { useState } from 'react'
import { HomeIcon, PlusCircleIcon, MagnifyingGlassCircleIcon, HeartIcon, UserIcon } from '@heroicons/react/20/solid';

interface Props {
	type: string;
	className?: string;
}

export default function Element({ type, className }: Props) {
	const iconStyles = 'text-blue-400 w-9 h-9';

	const [icons] = useState({
		home: { icon: <HomeIcon className={iconStyles} />, label: 'Главная' },
		liked: { icon: <HeartIcon className={iconStyles} />, label: 'Избранное' },
		add: { icon: <PlusCircleIcon className={iconStyles} />, label: 'Разместить' },
		find: { icon: <MagnifyingGlassCircleIcon className={iconStyles} />, label: 'Поиск' },
		user: { icon: <UserIcon className={iconStyles} />, label: 'Профиль' },
	})

	const selectedIcon = icons[type] || { icon: null, label: '' };

	return (
		<div className={`h-full w-full p-3.5 flex flex-col justify-center items-center bg-blue-900 hover:bg-blue-900/90 ${className}`}>
			{selectedIcon.icon}
			<label className='text-white text-xs hidden sm:block'>{selectedIcon.label}</label>
		</div>
	)
}
