import { auth, signOut } from '@/auth';
import Button from '@/app/ui/form/button';
import { PowerIcon } from "@heroicons/react/24/solid";

export default function Profile() {
	return (
		<main className="relative flex flex-col items-center justify-center min-h-screen">
			<form
				action={async () => {
					'use server';
					await signOut();
				}}
				className="flex flex-col items-center justify-center"
			>
				<h2>Вы уверены, что хотите выйти из аккаунта</h2>
				<div className="flex items-center justify-center">
					<Button className="my-4 mx-2">
						<PowerIcon className="w-6 mr-2" />
						Выйти
					</Button>
					<Button className="my-4 mx-2 bg-blue-200">
						Отмена
					</Button>
				</div>
			</form>
		</main>
	)
}

