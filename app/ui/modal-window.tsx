import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

interface Props {
	title: string;
	text: string;
	button: string;
}

export default function ModalWindow({title, text, button}: Props) {
	let [isOpen, setIsOpen] = useState(true)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="fixed z-30" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Panel className="fixed w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all">
							<Dialog.Title
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								{title}
							</Dialog.Title>
							<div className="mt-2">
								<p className="text-sm text-gray-500">
									{text}
								</p>
							</div>

							<div className="mt-4">
								<button
									type="button"
									className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
									onClick={closeModal}
								>
									{button}
								</button>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	)
}