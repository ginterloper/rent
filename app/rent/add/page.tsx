import Tabs from "@/app/ui/tabs";
import { fetchCategories, fetchTabs, fetchTypes } from '@/app/lib/data';

export default async function Add() {
	const [tabs, categories, types] = await Promise.all([
		fetchTabs(),
    fetchCategories(),
    fetchTypes(),
  ]);
	return (
		<div className="flex flex-col items-center min-h-screen p-4">
			<Tabs tabs={tabs} categories={categories} types={types}/>
		</div>
	);
}
