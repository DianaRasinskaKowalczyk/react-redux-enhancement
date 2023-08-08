import currencies from "./currencies";

const currencyOptionsArray = Object.keys(currencies);
const today = new Date().toISOString().split("T")[0];

export const formFields = [
	{
		name: "currency",
		label: "Select currency",
		required: true,
		type: "select",
		errMessage: "Select a currency",
		options: currencyOptionsArray,
	},
	{
		name: "amount",
		label: "Enter currency amount",
		required: true,
		type: "number",
		errMessage: "Enter amount of currency",
		placeholder: "currency amount",
	},
	{
		name: "purchaseDate",
		label: "Enter purchase date",
		required: true,
		type: "date",
		errMessage: "Enter date of purchase",
		placeholder: "YYYY-MM-DD",
		maxDate: today,
	},
	{
		name: "price",
		label: "Enter purchase price",
		required: true,
		type: "number",
		errMessage: "Enter price of purchase",
		placeholder: "purchase price",
	},
];
