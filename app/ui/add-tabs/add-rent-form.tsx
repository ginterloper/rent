import React from 'react';
import { useFormState } from 'react-dom';
import { createPost } from '@/app/lib/actions'
import { Option } from '@/app/lib/definitions';
import Select from '@/app/ui/form/select';
import Button from '@/app/ui/form/button';
import Text from '@/app/ui/form/textbox';

interface Props {
	categories: Option[];
	types: Option[];
}

export default function AddRentForm({categories, types}: Props) {
	const initialState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(createPost, initialState);
	return (
		<div>
			<form action={dispatch} className="w-full flex flex-col items-center justify-center">
				<Select state={state} label="Категория" options={categories} error="category"/>
				<Select state={state} label="Тип" options={types} error="type"/>
				<Text state={state} placeholder="Название" type="text" error="name"/>
				<Text state={state} placeholder="Цена" type="number" error="price"/>
				<Button
					type="submit"
					className="w-full my-2 justify-center"
				>
					Создать
				</Button>
			</form>
		</div>
	)
}