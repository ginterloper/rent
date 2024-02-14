'use client';
import { Tab } from '@headlessui/react'
import AddRentForm from "@/app/ui/add-tabs/add-rent-form"
import AddRentOutForm from "@/app/ui/add-tabs/add-rent-out-form"
import { Option } from '@/app/lib/definitions';

function classNames(...classes:string[]) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	tabs: Option[];
	categories: Option[];
	types: Option[];
}

export default function Tabs({tabs, categories, types}: Props) {
	return (
		<div className="w-full max-w-md p-2 sm:px-0">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-gray-100 p-1">
					{(tabs).map((tab) => (
						<Tab
							key={tab.id}
							className={({ selected }) =>
								classNames(
									'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'focus:outline-none',
									selected
										? 'bg-white text-blue-500 shadow'
										: 'text-gray-400 hover:bg-gray-200 hover:text-white'
								)
							}
						>
							{tab.name}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
						<Tab.Panel
							key={1}
							className='rounded-xl bg-gray-100 py-4 px-10'
						>
							<AddRentForm categories={categories} types={types}/>
						</Tab.Panel>
						<Tab.Panel
							key={2}
							className='rounded-xl bg-gray-100 py-4 px-10'
						>
							<AddRentOutForm categories={categories} types={types}/>
						</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
