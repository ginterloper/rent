'use client';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Form from "@/app/ui/form";


export default function Tabs() {
	const [elements] = useState({
		"Взять в аренду":[
			{ 
				id: 1,
				type: 'select',
				label: 'Выберите категорию',
				necessary: true,
				options:[ 
					{
						id: 0,
						label: "Категория"
					},
					{
						id: 1,
						label: "Автомобиль"
					},
					{
						id: 2,
						label: "Недвижимость"
					}
				]
			},
			{ 
				id: 2,
				type: 'select',
				label: 'Выберите тип',
				options:[ 
					{
						id: 0,
						label: "Тип"
					},
					{
						id: 1,
						label: "Крутой"
					},
					{
						id: 2,
						label: "Не крутой"
					}
				]
			},
			{ 
				id: 3,
				type: 'text',
				label: 'Выберите название',
				placeholder: 'Название' 
			}
		],
		"Сдать в аренду": [
			{ 
				id: 1,
				type: 'select',
				label: 'Выберите категорию',
				options:[ 
					{
						id: 0,
						label: "Категория"
					},
					{
						id: 1,
						label: "One"
					},
					{
						id: 2,
						label: "Two"
					}
				]
			},
			{ 
				id: 2,
				type: 'select',
				label: 'Выберите тип',
				options:[ 
					{
						id: 0,
						label: "Тип"
					},
					{
						id: 1,
						label: "One"
					},
					{
						id: 2,
						label: "Two"
					}
				]
			},
			{ 
				id: 3,
				type: 'text',
				label: 'Выберите название',
				placeholder: 'Название' 
			},
			{ 
				id: 4,
				type: 'text',
				label: 'Выберите цену',
				placeholder: 'Цена' 
			}
		]
	});

	return (
		<div className="w-full md:w-70 p-16">
			<Tab.Group>
				<Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
					{Object.keys(elements).map((elements) => (
						<Tab
							key={elements}
							className={({ selected }) =>
									`w-full rounded-lg py-2.5 text-sm font-medium leading-5',
									'focus:outline-none',
									${selected
										? 'bg-white text-blue-700 shadow'
										: 'text-gray-500 hover:bg-white/[0.12] hover:text-white'}`
							}
						>
							{elements}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className="mt-2">
					{Object.values(elements).map((els, idx) => (
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