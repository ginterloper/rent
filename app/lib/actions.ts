'use client';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  id: z.string(),
  category: z.string({
		invalid_type_error: 'Пожалуйста выберите категорию.',
	}),
  type: z.string({
		invalid_type_error: 'Пожалуйста выберите тип.',
	}),
  // amount: z.coerce
	// .number()
	// .gt(0, { message: 'Please enter an amount greater than $0.'}),
  // status: z.enum(['pending', 'paid'], {
	// 	invalid_type_error: 'Please select an invoice status.',
	// }),
  date: z.string(),
});

const CreatePost = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    category?: string[];
    type?: string[];
  };
  message?: string | null;
};
 
export async function createPost(prevState: State, formData: FormData) {
	console.log('creating post...')
  const validatedFields = CreatePost.safeParse({
    category: formData.get('category'),
    type: formData.get('type'),
  });

	console.log('category: ' + formData.get('category'))
	console.log('type: ' + formData.get('type'))
	console.log('validation: ' + validatedFields.success)

	if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Не все поля заполнены.',
    };
  }
 
	const { category, type } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];

	const invoiceData = {
		category: category,
		type: type,
		date: date
	};
	
	// Convert invoiceData to JSON string
	const jsonInvoiceData = JSON.stringify(invoiceData);

	// Создаем объект Blob из JSON-данных
	const blob = new Blob([jsonInvoiceData], { type: 'application/json' });

	// Создаем URL для объекта Blob
	const url = URL.createObjectURL(blob);

	// Создаем ссылку для скачивания файла и эмулируем клик по ней
	const link = document.createElement('a');
	link.href = url;
	link.download = 'form_data.json';
	document.body.appendChild(link);
	link.click();

	// Освобождаем ресурсы после скачивания файла
	URL.revokeObjectURL(url);
  // try {
  //   await sql`
  //     INSERT INTO invoices (customer_id, amount, status, date)
  //     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  //   `;
  // } catch (error) {
  //   return {
  //     message: 'Database Error: Failed to Create Invoice.',
  //   };
  // }

 
  revalidatePath('/home');
  redirect('/home');
}