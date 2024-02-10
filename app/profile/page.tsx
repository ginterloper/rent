

export default function Profile() {
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-8 py-12 lg:px-10">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Войдите в свой аккаунт
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST">
						<div>
							<label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
								Номер телефона
							</label>
							<div className="mt-2">
								<input
									id="phone"
									name="phone"
									type="phone"
									autoComplete="phone"
									required
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									placeholder="123-456-7890"
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Пароль
								</label>
								<div className="text-sm">
									<a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
										Забыли пароль?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Войти
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Не зарегистрированы?{' '}
						<a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
							Зарегистрироваться
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

