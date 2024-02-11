import { CubeIcon } from "@heroicons/react/24/solid";
import Posts from "@/app/ui/posts";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen p-4">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 text-white">
				<CubeIcon className="h-8 w-8 mr-2 md:h-11 md:w-11" />
				<p className="text-3xl md:text-5xl">
					<strong>
						Авито
					</strong>
				</p>
			</div>
			<div className="mt-4 flex grow flex-col gap-4">
				<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10">
					<p
						className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
					>
						<strong>Добро пожаловать на Авито.</strong> Здесь вы можете рамещать объявления
					</p>
				</div>
			</div>
			<Posts/>
		</main>
	);
}
