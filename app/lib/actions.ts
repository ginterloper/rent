'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const PostSchema = z.object({
	id: z.string(),
	category: z.string({
		invalid_type_error: 'Пожалуйста выберите категорию.',
	}),
	type: z.string({
		invalid_type_error: 'Пожалуйста выберите тип.',
	}),
	name: z.string({
		invalid_type_error: 'Пожалуйста напишите название в текстовом формате.',
	}).min(3, {
		message: 'Название должно быть не меньше 3 символов.',
	}),
	price: z.coerce
	.number()
	.gt(0, {
		message: 'Введите значение больше $0.'
	}),
	date: z.string(),
});

const CreatePost = PostSchema.omit({ id: true, date: true });

export type State = {
	errors?: {
		category?: string[];
		type?: string[];
		name?: string[];
		price?: string[];
	};
	message?: string | null;
};

export async function createPost(prevState: State, formData: FormData) {
	const validatedFields = CreatePost.safeParse({
		category: formData.get('category'),
		type: formData.get('type'),
		name: formData.get('name'),
		price: formData.get('price'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Не все поля заполнены.',
		};
	}

	const { category, type, name } = validatedFields.data;
	const date = new Date().toISOString().split('T')[0];

	try {
	  await sql`
	    INSERT INTO posts (category, type, name, price, date)
	    VALUES (${category}, ${type}, ${name}, ${date})
	  `;
	} catch (error) {
	  return {
	    message: 'Database Error: Failed to Create Post.',
	  };
	}


	revalidatePath('/home');
	redirect('/home');
}