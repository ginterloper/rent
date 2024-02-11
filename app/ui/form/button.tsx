'use client';
import React from 'react';

interface Props {
	label: string;
	disabled?: boolean | false;
}

function SubmitButton({ label, disabled }: Props) {
	return (
		<div className='w-full p-2'>
			<button type="submit" disabled={disabled} className="w-full my-4 rounded-md bg-blue-600 p-2 text-sm font-semibold leading-6 text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-200 disabled:text-blue-600 disabled:shadow-none">
				{label}
			</button>
		</div>
	);
}

export default SubmitButton;
