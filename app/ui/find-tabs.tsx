'use client';
import { Tab } from '@headlessui/react'
import Post from '@/app/ui/find-tabs/post';
import { LoadMore } from '@/app/ui/load-more';
import { TabType, PostType } from '@/app/lib/definitions';

function classNames(...classes:string[]) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	tabs: TabType[];
	posts: PostType[];
}

export default function Tabs({tabs, posts}: Props) {
	return (
		<div className="w-full max-w-lg p-2 sm:px-0 sm:mb-0">
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
							className='bg-gray-100 rounded-xl grid p-2 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
						>
							<Post
								posts={posts}
							>
							</Post>
							<LoadMore></LoadMore>
						</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</div>
	)
}
