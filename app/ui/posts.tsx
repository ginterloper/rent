import { sql } from "@vercel/postgres";

export default async function Posts() {
  const { rows } = await sql`SELECT * from posts`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}