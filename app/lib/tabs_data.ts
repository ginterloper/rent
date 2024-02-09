export const tabData = {
	"Взять в аренду":[
		{ 
			id: 1,
			type: 'select',
			label: 'Выберите категорию',
			necessary: true,
			options:[ 
				{
					id: 0,
					label: "Категория"
				},
				{
					id: 1,
					label: "Автомобиль"
				},
				{
					id: 2,
					label: "Недвижимость"
				}
			]
		},
		{ 
			id: 2,
			type: 'select',
			label: 'Выберите тип',
			options:[ 
				{
					id: 0,
					label: "Тип"
				},
				{
					id: 1,
					label: "Крутой"
				},
				{
					id: 2,
					label: "Не крутой"
				}
			]
		},
		{ 
			id: 3,
			type: 'text',
			label: 'Выберите название',
			placeholder: 'Название' 
		}
	],
	"Сдать в аренду": [
		{ 
			id: 1,
			type: 'select',
			label: 'Выберите категорию',
			options:[ 
				{
					id: 0,
					label: "Категория"
				},
				{
					id: 1,
					label: "One"
				},
				{
					id: 2,
					label: "Two"
				}
			]
		},
		{ 
			id: 2,
			type: 'select',
			label: 'Выберите тип',
			options:[ 
				{
					id: 0,
					label: "Тип"
				},
				{
					id: 1,
					label: "One"
				},
				{
					id: 2,
					label: "Two"
				}
			]
		},
		{ 
			id: 3,
			type: 'text',
			label: 'Выберите название',
			placeholder: 'Название' 
		},
		{ 
			id: 4,
			type: 'text',
			label: 'Выберите цену',
			placeholder: 'Цена' 
		}
	]
};