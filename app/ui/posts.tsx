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
		posts p
	JOIN
		category c ON p.category = c.id
	JOIN
		type t ON p.type = t.id;
	`;

	return (
		<div className="relative overflow-x-auto rounded-xl bg-gray-100 px-6 py-10 hidden md:block">
			<table className="table-auto w-full text-center">
				<thead className="bg-gray-200">
					<tr>
						<th className="p-3 rounded-tl-xl">Название</th>
						<th className="p-3">Категория</th>
						<th className="p-3">Тип</th>
						<th className="p-3">Цена</th>
						<th className="p-3 rounded-tr-xl">Дата</th>
					</tr>
				</thead>
				<tbody className="bg-white">
					{rows.map((row, id) => (
						id + 1 === rows.length ?
						<tr key={row.post_id}>
							<td className="p-3 rounded-bl-xl">{row.post_name}</td>
							<td className="p-3">{row.category_name}</td>
							<td className="p-3">{row.type_name}</td>
							<td className="p-3">{row.price}</td>
							<td className="p-3 rounded-br-xl">{new Date(row.date).toLocaleString().split(',')[0]}</td>
						</tr>
						:
						<tr key={row.post_id}>
							<td className="p-3">{row.post_name}</td>
							<td className="p-3">{row.category_name}</td>
							<td className="p-3">{row.type_name}</td>
							<td className="p-3">{row.price}</td>
							<td className="p-3">{new Date(row.date).toLocaleString().split(',')[0]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}