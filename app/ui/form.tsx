import React, { useState } from 'react';
import ComboboxField, { Option } from '@/app/ui/form/combobox';
import TextField from '@/app/ui/form/textbox';
import SubmitButton from '@/app/ui/form/button';
import { createPost } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export interface Element {
	id: number;
	type: string;
	label: string;
	name?: string;
	value?: string | '';
	textType?: string | 'text';
	options?: Option[] | '';
	placeholder?: string | '';
	necessary?: boolean | false;
}

interface Props {
	elements: Element[];
}

export default function Form( { elements }:Props ) {
	const initialState = { message: null, errors: {} };
	const [state, dispatch] = useFormState(createPost, initialState);
	return (
		<form action={dispatch} className='w-full flex flex-col items-center justify-center bg-blue-400'>
			{/* {elements.map((element) => {
				if (element.type === 'select') {
					return (
						<ComboboxField
							key={element.id}
							label={element.label}
							options={element.options || []}
							necessary={element.necessary || false}
							onChange={handleChange}
						/>
					);
				} else if (element.type === 'text') {
					return (
						<TextField
							key={element.id}
							id={element.id}
							textType={element.textType}
							label={element.label}
							placeholder={element.placeholder || ''}
							value={formData[element.id] || ''}
							necessary={element.necessary}
							onChange={handleChange}
						/>
					);
				}
				return null;
			})} */}

			{elements.map((element:Element) => {
				if (element.type === 'select') {
					return (
						<>
						<select
							name={element.name}
							id={element.name}
							defaultValue=""
							aria-describedby="error"
						>
							<option value="" disabled>
								{element.label}
							</option>
							{element.options.map((option:Option) => (
								<option key={option.id} value={option.id}>
									{option.label}
								</option>
							))}
						</select>
						<div id="error" aria-live="polite" aria-atomic="true">
							{state.errors?.[element.name] &&
								state.errors[element.name].map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
						</>
					);
				} else if (element.type === 'text') {
					return (
						<input type="text" />
					);
				}
				return null;
			})}
			<SubmitButton label="Создать" />
		</form>
	);
}