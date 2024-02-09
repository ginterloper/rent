import Image from "next/image";
import Tabs from "@/app/ui/tabs";
import { tabData } from '@/app/lib/tabs_data';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen">
			<Tabs
				className="w-30 sm:w-full p-16"
				tabData={tabData}
			/>
			<Image
				src="/desktop.png"
				width={1000}
				height={760}
				className="hidden md:block"
				alt="Screenshots of the dashboard project showing desktop version"
			/>
		</main>
	);
}
