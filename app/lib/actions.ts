'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const PostSchema = z.object({
	id: z.string(),

	category: z.coerce
	.number({
		invalid_type_error: 'Пожалуйста выберите категорию.',
	})
	.gt(0, { message: "Пожалуйста выберите категорию." }
	),

	type: z.coerce
	.number({
		invalid_type_error: 'Пожалуйста выберите тип.',
	})
	.gt(0, { message: "Пожалуйста выберите тип." }
	),

	name: z.string({
		invalid_type_error: 'Пожалуйста напишите название в текстовом формате.',
	}).min(3, {
		message: 'Название должно быть не меньше 3 символов.',
	}),

	price: z.coerce
	.number({
		invalid_type_error: 'Пожалуйста напишите цену в числовом формате.',
	})
	.gt(0, {
		message: 'Введите значение больше $0.'
	}),

	date: z.string(),
});

const CreatePost = PostSchema.omit({ id: true, date: true });

export type CreatePostState = {
	errors?: {
		category?: string[];
		type?: string[];
		name?: string[];
		price?: string[];
	};
	message?: string | null;
};

export async function createPost(prevState: CreatePostState, formData: FormData) {
	const validatedFields = CreatePost.safeParse({
		category: formData.get('category[id]'),
		type: formData.get('type[id]'),
		name: formData.get('name'),
		price: formData.get('price'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Не все поля заполнены.',
		};
	}

	const { category, type, name, price } = validatedFields.data;

	try {
		await sql`
			INSERT INTO posts (category, type, name, price)
			VALUES (${category}, ${type}, ${name}, ${price})
		`;
	} catch (error) {
		console.log(error);
		return {
			message: 'Database Error: Failed to Create Post.',
		};
	}

	revalidatePath('/');
	redirect('/');
}

export async function createOutPost(prevState: CreatePostState, formData: FormData) {
	const validatedFields = CreatePost.safeParse({
		category: formData.get('category[id]'),
		type: formData.get('type[id]'),
		name: formData.get('name'),
		price: formData.get('price'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Не все поля заполнены.',
		};
	}

	const { category, type, name, price } = validatedFields.data;

	try {
		await sql`
			INSERT INTO outPosts (category, type, name, price)
			VALUES (${category}, ${type}, ${name}, ${price})
		`;
	} catch (error) {
		console.log(error);
		return {
			message: 'Database Error: Failed to Create Post.',
		};
	}

	revalidatePath('/');
	redirect('/');
}