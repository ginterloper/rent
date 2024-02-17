import Link from 'next/link';

export default function Profile() {
	return (
		<main className="relative flex flex-col items-center justify-center min-h-screen">
			<Link
				href={'/rent/profile/sign-out'}
				className="block py-2 px-4 bg-blue-500 text-white rounded-md"
			>
				Выйти
			</Link>
		</main>
	)
}

