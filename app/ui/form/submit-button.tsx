interface Props {
	label: string;
}

export default function SubmitButton({label}: Props) {
	return (
		<div className='w-full my-2'>
			<button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">{label}</button>
		</div>
	)
}