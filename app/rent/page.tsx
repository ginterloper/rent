import { BriefcaseIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
	return (
		<main className="flex min-h-screen flex-col p-6">
			<div className="flex h-20 shrink-0 items-end rounded-lg text-white bg-blue-500 p-4">
				<BriefcaseIcon className="h-6 mr-2"/>
				Авито Аренда
			</div>
			<div className="mt-4 flex grow flex-col gap-4 md:flex-row">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<p
						className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
					>
						<strong>Авито Аренда</strong> - удобное веб-приложение, которое позволяет пользователям легко находить и размещать объявления о аренде недвижимости и транспорта. С помощью этой платформы пользователи могут быстро найти идеальное жилье или автотранспорт для аренды, а также разместить свои собственные объявления для сдачи.
					</p>
				</div>
				<div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
				</div>
			</div>
		</main>
	);
}
