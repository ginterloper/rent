import Image from "next/image";
import Tabs from "@/app/ui/tabs";
import { tabData } from '@/app/lib/tabs_data';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen p-4">
			<div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <h1>Store</h1>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
					<p
						className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
					>
            <strong>Welcome to Store.</strong> This is the store
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
				<Image
					src="/desktop.png"
					width={1000}
					height={760}
					className="hidden md:block"
					alt="Screenshots of the dashboard project showing desktop version"
				/>
				<Image
					src="/mobile.jpg"
					width={560}
					height={620}
					className="block md:hidden"
					alt="Screenshots of the dashboard project showing mobile version"
				/>
        </div>
      </div>
		</main>
	);
}
