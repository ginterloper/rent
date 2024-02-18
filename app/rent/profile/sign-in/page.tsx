'use client'
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import Button from '@/app/ui/form/button';
import { ExclamationCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { PhoneIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function SignIn() {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	return (
		<main className="min-h-screen flex items-center justify-center">
			<div className="flex max-w-sm flex-1 flex-col items-center justify-center bg-gray-100 rounded-lg p-4 my-10 mx-5">
				<div className="sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Войдите в аккаунт
					</h2>
				</div>

				<div className="mt-10 sm:max-w-sm">
					<form action={dispatch}>
					<div>
							<div className="relative mt-2">
								<input
									id="phone"
									name="phone"
									type="phone"
									autoComplete="phone"
									placeholder="Телефон"
									required
									className="relative w-full cursor-default rounded-lg bg-white py-2 px-3 pl-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 sm:text-sm"
								/>
									<PhoneIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-blue-500" />
							</div>
						</div>

						<div>
							<div className="relative mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									placeholder="Пароль"
									required
									className="relative w-full cursor-default rounded-lg bg-white py-2 px-3 pl-10 text-left shadow-md focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 sm:text-sm"
								/>
									<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-blue-500" />
							</div>
						</div>

						<LoginButton />
						<div
							className="flex h-8 items-end space-x-1"
							aria-live="polite"
							aria-atomic="true"
						>
							{errorMessage && (
								<>
									<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
									<p className="text-sm text-red-500">{errorMessage}</p>
								</>
							)}
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Не зарегистрированы?{' '}
						<a href="#" className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
							Зарегистрироваться
						</a>
					</p>
					<p className="text-center text-sm text-gray-500">
						<a href="#" className="font-semibold leading-6 text-blue-500 hover:text-blue-400">
							Забыли пароль?
						</a>
					</p>
				</div>
			</div>
		</main>
	)
}

function LoginButton() {
	const { pending } = useFormStatus();

	return (
		<Button className="mt-4 w-full justify-center" aria-disabled={pending}>
			Войти <ArrowRightIcon className="ml-2 h-5 w-5 text-gray-50" />
		</Button>
	);
}