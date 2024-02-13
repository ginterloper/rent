import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

interface Props {
	placeholder: string;
	type?: string | "text";
	state: { message: string, errors?: { category?: string[] | undefined; type?: string[] | undefined; name?: string[] | undefined; price?: string[] | undefined; } | undefined };
	error: keyof { category?: string[] | undefined; type?: string[] | undefined; name?: string[] | undefined; price?: string[] | undefined };
}

export default function Text({placeholder, type, state, error}: Props) {
	return (
		<div className='w-full my-2'>
			<label className="relative w-full block">
				{state.errors?.[error] ?
					<ExclamationCircleIcon className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 right-7 z-10 text-red-500" />
					: <></>
				}
				<input
					name={error}
					type={type}
					placeholder={placeholder}
					autoComplete="off"
					className="relative w-full cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 sm:text-sm"/>
			</label>
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