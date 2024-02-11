export const tabData = {
	"Взять в аренду":[
		{ 
			id: 1,
			type: 'select',
			label: 'Категория',
			name: 'category',
			necessary: true,
			options:[
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
			label: 'Тип',
			name: 'type',
			options:[ 
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
			name: 'name',
			placeholder: 'Название' 
		}
	],
	"Сдать в аренду": [
		{ 
			id: 1,
			type: 'select',
			label: 'Категория',
			name: 'category',
			options:[
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
			label: 'Тип',
			name: 'type',
			options:[ 
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
			name: 'name',
			type: 'text',
			placeholder: 'Название' 
		},
		{ 
			id: 4,
			name: 'price',
			type: 'text',
			textType: 'number',
			necessary: true,
			placeholder: 'Цена' 
		}
	]
};