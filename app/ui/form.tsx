import React, { useState } from 'react';
import ComboboxField, { Option } from '@/app/ui/form/combobox';
import Select from '@/app/ui/form/select';
import Textbox from '@/app/ui/form/textbox';
import SubmitButton from '@/app/ui/form/button';
import { createPost } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { string } from 'zod';

export interface Element {
  id: number;
  type: string | 'text';
  name: string | '';
  value?: string | '';
  textType?: string | 'text';
  options?: { id: number; label: string }[] | '';
  placeholder: string | '';
  necessary?: boolean | false;
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
		<form action={dispatch} className="w-full flex flex-col items-center justify-center sm:w-3/5 md:w-1/2">
			{elements.map((element: Element) => {
				let elementErrors: string[] = [];
				if (state.errors && element.name && element.name in state.errors) {
					elementErrors = state.errors[element.name as keyof Errors] || [];
				}
	
				if (element.type === 'select') {
					return (
						<Select
							key={element.id}
							name={element.name}
							options={element.options || []}
							placeholder={element.placeholder}
							errors={elementErrors}
						/>
					);
				} else if (element.type === 'text') {
					return (
						<Textbox
							key={element.id}
							name={element.name}
							textType={element.textType}
							placeholder={element.placeholder || ''}
							errors={elementErrors}
						/>
					);
				}
				return null;
			})}
	
			<SubmitButton label="Создать" />
		</form>
	);	
}
