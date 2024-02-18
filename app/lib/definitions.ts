export type TabType = {
  id: number;
  name: string;
};

export type Option = {
	id: number;
  name: string;
}

export type User = {
	id: string;
  name: string;
  phone: string;
  password: string;
}

export type PostType = {
	id: number,
	date: Date,
	category: string,
	type: string,
	name: string,
	price: number
}