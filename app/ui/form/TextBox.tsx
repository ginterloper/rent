'use client';
import React from 'react';

interface Props {
	id: number;
	type?: string;
	textType?: string;
	label: string;
	value: string;
	placeholder?: string;
	necessary?: boolean;
	onChange: (id: number, value: string) => void;
}

function TextField({ id, textType, label, necessary, placeholder, value, onChange }: Props) {
	return (
		<div className='my-4'>
			<label className='relative text-xs ml-3'>{necessary ? <span className='text-red-500'>* </span> : ''}{label}:
				<input
					type={textType || 'text'}
					value={value || ''}
					placeholder={placeholder || 'Text'}
					onChange={(e) => onChange(id, e.target.value)}
					className='block -mt-6 h-12 text-sm w-full rounded-lg border-none p-1.5 pl-3 pt-5 text-gray-900 shadow-md placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-500'
				/>
			</label>
		</div>
	);
}


export default TextField;
