import { sql } from '@vercel/postgres';
import { Option, PostType, TabType } from '@/app/lib/definitions';

export async function fetchCategories() {
	try {
		const data = await sql<Option>`
			SELECT
				id,
				name
			FROM category
			ORDER BY name ASC
		`;

		const categories = data.rows;
		return categories;
	} catch (err) {
		console.error('Database Error:', err);
		throw new Error('Failed to fetch all categories.');
	}
}

export async function fetchTypes() {
	try {
		const data = await sql<Option>`
			SELECT
				id,
				name
			FROM type
			ORDER BY name ASC
		`;

		const types = data.rows;
		return types;
	} catch (err) {
		console.error('Database Error:', err);
		throw new Error('Failed to fetch all types.');
	}
}

export async function fetchAddTabs() {
	try {
		const data = await sql<TabType>`
			SELECT
				id,
				name
			FROM addtabs
			ORDER BY name ASC
		`;

		const tabs = data.rows;
		return tabs;
	} catch (err) {
		console.error('Database Error:', err);
		throw new Error('Failed to fetch add tabs.');
	}
}

export async function fetchFindTabs() {
	try {
		const data = await sql<TabType>`
			SELECT
				id,
				name
			FROM findtabs
			ORDER BY name ASC
		`;

		const tabs = data.rows;
		return tabs;
	} catch (err) {
		console.error('Database Error:', err);
		throw new Error('Failed to fetch find tabs.');
	}
}

export async function fetchPosts(page: number) {
	const perPage = 6;

	try {
		const data = await sql<PostType>`
			SELECT
				p.id,
				p.name,
				p.price,
				p.date,
				c.name AS category,
				t.name AS type
			FROM
				posts p
			JOIN
				category c ON p.category = c.id
			JOIN
				type t ON p.type = t.id
			ORDER BY p.id ASC
			LIMIT ${perPage * page};
		`;

		const posts = data.rows;
		return posts;
	} catch (err) {
		console.error('Database Error:', err);
		throw new Error('Failed to fetch all posts.');
	}
}