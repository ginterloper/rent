import { PostType } from "@/app/lib/definitions"

interface Props {
	posts: PostType[];
}

export default function Post({posts}: Props) {
	return (
		<>
			{(posts).map((post) => (
				<a key={post.id} href={post.name} className="group bg-gray-200 rounded-lg">
					<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-lg bg-gray-300 xl:aspect-h-8 xl:aspect-w-7">
						<img
							src="https://my-apple-store.ru/wa-data/public/shop/products/86/34/13486/images/22267/22267.500@2x.jpg"
							alt="image"
							className="h-full w-full object-cover object-center group-hover:opacity-80"
						/>
					</div>
					<h3 className="mt-4 ml-4 text-sm text-gray-700">{post.name}</h3>
					<p className="mt-1 ml-4 mb-4 text-lg font-medium text-gray-900">{post.price}</p>
				</a>
			))}
		</>
	)
}
