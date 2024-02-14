'use client';
import React from 'react';
import Select from '@/app/ui/form/select';
import Textbox from '@/app/ui/form/textbox';
import SubmitButton from '@/app/ui/form/button';
import { createPost } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export interface Element {
	id: number;
	type: string | 'text';
	name: string | '';
	textType?: string;
	placeholder: string | '';
	necessary?: boolean;
}

interface Props {
	elements: Element[];
}

interface Errors {
	category?: string[];
	type?: string[];
	name?: string[];
	price?: string[];
}


export default function Form({ elements }: Props) {
	const initialState = { message: '', errors: {} as Errors };
	const [state, dispatch] = useFormState(createPost, initialState);

	return (
		<form action={dispatch} className="w-full flex flex-col items-center justify-center">
			{elements.map(async function (element: Element) {
				let elementErrors: string[] = [];
				if (state.errors && element.name && element.name in state.errors) {
					elementErrors = state.errors[element.name as keyof Errors] || [];
				}

				if (element.type === 'select') {
					return (
						<Select
							key={element.id}
							name={element.name}
							placeholder={element.placeholder}
							options={Option[]}
							errors={elementErrors} />
					);
				} else if (element.type === 'text') {
					return (
						<Textbox
							key={element.id}
							name={element.name}
							textType={element.textType}
							placeholder={element.placeholder || ''}
							errors={elementErrors} />
					);
				}
				return null;
			})}

			<SubmitButton label="Создать" />
		</form>
	);
}
