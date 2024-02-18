import { fetchAddTabs, fetchPosts } from "@/app/lib/data";
import Tabs from "@/app/ui/find-tabs";

export default async function Page() {
	const [tabs, posts] = await Promise.all([
		fetchAddTabs(),
		fetchPosts(1)
  ]);
	return (
		<main className="flex flex-col mb-20 items-center p-6">
			<Tabs tabs={tabs} posts={posts}/>
		</main>
	);
}
