import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Option } from "@/app/lib/definitions";

interface Props {
	label: string;
	options: Option[];
	state: { message: string, errors?: { category?: string[] | undefined; type?: string[] | undefined; name?: string[] | undefined; price?: string[] | undefined; } | undefined };
	error: keyof { category?: string[] | undefined; type?: string[] | undefined; name?: string[] | undefined; price?: string[] | undefined };
}

export default function Select({label, options, state, error}: Props) {
	const newOptions = [{ id: 0, name: label }, ...options];
	const [selectedOption, setSelectedOption] = useState(newOptions[0])
	return (
		<div className='w-full my-2'>
			<Listbox name={error} value={selectedOption} onChange={setSelectedOption}>
				<div className="relative w-full">
					<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
							<span className="block truncate">{selectedOption.name}</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<ChevronUpDownIcon
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
							{options.map((option, optionIdx) => (
								<Listbox.Option
									key={optionIdx}
									className={({ active }) =>
										`relative cursor-pointer rounded-md select-none py-2 pl-10 pr-4 ${
											active ? 'bg-blue-200 text-blue-500' : 'text-black'
										}`
									}
									value={option}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? 'font-medium' : 'font-normal'
												}`}
											>
												{option.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
			<div id="error" aria-live="polite" aria-atomic="true">
				{state.errors?.[error] &&
				state.errors?.[error]?.map((error: string) => (
					<p className="mt-2 ml-3 text-sm text-red-500" key={error}>
							{error}
					</p>
				))}
			</div>
		</div>
	)
}