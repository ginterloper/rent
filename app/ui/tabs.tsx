'use client';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Form from "@/app/ui/form";

interface TabData {
	id: number;
	type: string;
	label: string;
	necessary?: boolean;
	options?: { id: number; label: string }[];
	placeholder?: string;
}

interface Props {
	className?: string;
	tabData: { [key: string]: TabData[] };
}

export default function Tabs({ className, tabData }: Props ) {
	

	return (
		<div className={className}>
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					{Object.keys(tabData).map((tabData) => (
						<Tab
							key={tabData}
							className={({ selected }) =>
									`w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'focus:outline-none',
									${selected
										? 'bg-white text-blue-700 shadow'
										: 'text-gray-500 hover:bg-white/[0.12] hover:text-white'}`
							}
						>
							{tabData}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(tabData).map((els, idx) => (
						<Tab.Panel
							key={idx}
							className='rounded-xl bg-white p-3 focus:outline-none'
						>
							<Form elements={els}/>
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}