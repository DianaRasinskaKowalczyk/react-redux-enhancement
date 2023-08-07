import currencies from "./currencies";

const currencyOptionsArray = Object.keys(currencies);

export const formFields = [
	{
		name: "currency",
		label: "Select currency",
		required: true,
		type: "select",
		pattern: null,
		errMessage: "Select a currency",
		options: currencyOptionsArray,
	},
	{
		name: "amount",
		label: "Enter currency amount",
		required: true,
		type: "number",
		pattern: null,
		errMessage: "Enter amount of currency",
		placeholder: "currency amount",
	},
	{
		name: "purchaseDate",
		label: "Enter purchase date",
		required: true,
		type: "text",
		pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
		errMessage: "Enter date of purchase",
		placeholder: "YYYY-MM-DD",
	},
	{
		name: "price",
		label: "Enter price of purchase",
		required: true,
		type: "number",
		pattern: null,
		errMessage: "Enter price of purchase",
		placeholder: "purchase price",
	},
];
