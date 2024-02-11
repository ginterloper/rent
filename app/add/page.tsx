import Image from "next/image";
import Tabs from "@/app/ui/tabs";
import { tabData } from '@/app/lib/tabs_data';

export default function Add() {
	return (
		<main className="flex flex-col min-h-screen p-4">
			<Tabs
				className="w-30 sm:w-full"
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
