"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/app/ui/spinner";
import { fetchPosts } from "@/app/lib/data";
import { PostType } from "@/app/lib/definitions"
import Post from "@/app/ui/find-tabs/post";

export function LoadMore() {
	const [posts, setPosts] = useState<PostType[]>([]);
	const [page, setPage] = useState(1);

	const { ref, inView } = useInView();

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms));

	const loadMorePosts = async () => {
		// Once the page 8 is reached repeat the process all over again.
		await delay(2000);
		const nextPage = (page % 4) + 1;
		const newProducts = (await fetchPosts(nextPage)) ?? [];
		setPosts((prevProducts: PostType[]) => [...prevProducts, ...newProducts]);
		setPage(nextPage);
	};

	useEffect(() => {
		if (inView) {
			loadMorePosts();
		}
	}, [inView]);

	return (
		<>
			<Post posts={posts} />
			<div
				className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
				ref={ref}
			>
				<Spinner />
			</div>
		</>
	);
}