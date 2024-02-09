import Image from "next/image";
import Tabs from "@/app/ui/tabs";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen p-6">
			<Tabs/>
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
