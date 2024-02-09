import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export interface Option {
		id: number;
		label: string;
}

interface Props {
		label: string;
		options: Option[];
		necessary?: boolean;
		onChange: (id: number, value: string) => void;
}

export default function ComboboxField({ label, options, necessary, onChange }: Props) {
		const [selected, setSelected] = useState(options[0])
		const [query, setQuery] = useState('')
		
		const filteredOptions =
				query === ''
						? options
						: options.filter((el) =>
								el.label
										.toLowerCase()
										.replace(/\s+/g, '')
										.includes(query.toLowerCase().replace(/\s+/g, ''))
						)

		return (
				<div className="relative my-6">
						<label className='text-xs ml-3'>{necessary ? '* ' : ''}{label}:</label>
						<Combobox value={selected} onChange={setSelected}>
								<div className="relative mt-1">
										<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
												<Combobox.Input
														className="w-full h-9 rounded-lg border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-blue-500"
														displayValue={(el) => el.label}
														onChange={(event) => setQuery(event.target.value)}
												/>
												<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
														<ChevronUpDownIcon
																className="h-5 w-5 text-gray-400"
																aria-hidden="true"
														/>
												</Combobox.Button>
										</div>
										<Transition
												as={Fragment}
												leave="transition ease-in duration-100"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
												afterLeave={() => setQuery('')}
										>
												<Combobox.Options className="absolute z-10 text-xs mt-1 max-h-60 w-full overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm bottom-auto">
														{filteredOptions.length === 0 && query !== '' ? (
																<div className="relative cursor-default select-none px-4 py-2 text-gray-700">
																		Ничего не найдено.
																</div>
														) : (
															filteredOptions.map((el) => (
																		<Combobox.Option
																				key={el.id}
																				className={({ active }) =>
																						`relative cursor-default rounded select-none py-2 pl-10 pr-4 ${
																								active ? 'bg-blue-600 text-white' : 'text-gray-900'
																						}`
																				}
																				value={el}
																		>
																				{({ selected, active }) => (
																						<>
																								<span
																										className={`block truncate ${
																												selected ? 'font-medium' : 'font-normal'
																										}`}
																								>
																										{el.label}
																								</span>
																								{selected ? (
																										<span
																												className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																														active ? 'text-white' : 'text-teal-600'
																												}`}
																										>
																												<CheckIcon className="h-5 w-5" aria-hidden="true" />
																										</span>
																								) : null}
																						</>
																				)}
																		</Combobox.Option>
																))
														)}
												</Combobox.Options>
										</Transition>
								</div>
						</Combobox>
				</div>
		)
}
