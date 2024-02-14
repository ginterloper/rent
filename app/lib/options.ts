
import { sql } from '@vercel/postgres';
import { formatCurrency } from './utils';
import { unstable_noStore as noStore } from 'next/cache';

export interface Option {
	id: number;
	label: string;
}

export async function getOptions(type: string) {
	noStore();
	try {
		const data = await sql<Option>`
			SELECT id, name as label FROM category;
		`;

		return data.rows;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch options.');
	}
}