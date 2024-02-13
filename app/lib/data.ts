import { sql } from '@vercel/postgres';
import { Option } from './definitions';

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

export async function fetchTabs() {
  try {
    const data = await sql<Option>`
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
    throw new Error('Failed to fetch all tabs.');
  }
}