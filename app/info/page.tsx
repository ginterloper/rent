const stats = [
	{ name: 'Платформа предлагает различные меры безопасности, включая проверку аутентичности объявлений и защиту личных данных пользователей.', value: 'Безопасность' },
	{ name: 'Пользователи могут использовать удобный интерфейс для поиска жилья или транспортных средств по различным параметрам, таким как тип объекта, район, цена, количество комнат (для жилья) и т. д.', value: 'Поиск и фильтрация' },
	{ name: 'Зарегистрированные пользователи могут легко создавать свои собственные объявления о сдаче недвижимости или транспортных средств. Они могут добавлять описания, фотографии, контактную информацию и другие детали, чтобы привлечь потенциальных арендаторов.', value: 'Создание объявлений' },
	{ name: 'После завершения сделки пользователи могут оставлять отзывы и оценки, помогая другим пользователям принимать более обоснованные решения при выборе объекта аренды.', value: 'Отзывы и оценки' },
	{ name: 'Веб-приложение Авито Аренда доступно не только через компьютер, но и через мобильные устройства, обеспечивая максимальное удобство использования в любое время и в любом месте.', value: 'Мобильная совместимость' },
]

export default function Info() {
	return (
		<main className="relative isolate overflow-hidden bg-gray-200 py-24 sm:py-32">
			<div
				className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
				aria-hidden="true"
			>
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className="fixed -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				aria-hidden="true"
			>
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Авито Аренда</h2>
					<p className="mt-6 text-lg leading-8 text-gray-900">
						В целом, Авито предоставляет удобный и надежный инструмент для поиска и размещения объявлений о аренде недвижимости и транспортных средств, делая процесс аренды более простым и эффективным для всех участников.
					</p>
				</div>
				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
					<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat) => (
							<div key={stat.name} className="flex flex-col p-4 rounded-xl bg-gray-100/30">
								<dd className="text-2xl font-bold leading-9 tracking-tight text-black">{stat.value}</dd>
								<dt className="text-base leading-7 text-gray-900">{stat.name}</dt>
							</div>
						))}
					</dl>
				</div>
			</div>
		</main>
	)
}
