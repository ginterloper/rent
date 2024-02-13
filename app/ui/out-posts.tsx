import { sql } from "@vercel/postgres";

export default async function Posts() {
	const { rows } = await sql`SELECT
		p.id AS post_id,
		p.name AS post_name,
		p.price,
		p.date,
		c.name AS category_name,
		t.name AS type_name
	FROM
		outPosts p
	JOIN
		category c ON p.category = c.id
	JOIN
		type t ON p.type = t.id;
	`;

	return (
		<div className="rounded-lg bg-gray-50 px-6 py-10">
			<table className="table-auto w-full rounded-lg">
				<thead className="rounded-lg">
					<tr className="bg-gray-200 rounded-lg">
						<th>Name</th>
						<th>Category</th>
						<th>Type</th>
						<th>Price</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.post_id}>
							<td>{row.post_name}</td>
							<td>{row.category_name}</td>
							<td>{row.type_name}</td>
							<td>{row.price}</td>
							<td>{new Date(row.date).toLocaleString().split(',')[0]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}