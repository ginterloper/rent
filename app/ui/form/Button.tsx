'use client';
import React from 'react';

interface Props {
	label: string;
	disabled?: boolean | false;
}

function SubmitButton({ label, disabled }: Props) {
	return (
		<button type="submit" disabled={disabled} className="flex h-9 w-full my-8 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-200 disabled:text-blue-600 disabled:shadow-none">
			{label}
		</button>
	);
}

export default SubmitButton;
