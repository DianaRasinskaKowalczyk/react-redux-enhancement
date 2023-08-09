import React, { useEffect, useState } from "react";
import FormField from "../formField/FormField";
import { formFields } from "../../data/formFields";
import Button from "../Button/Button";
import { validateForm } from "../../helpers/formValidation";
import Error from "../Error/Error";
import LocalStorage from "../../modules/localstorage/localstorage.api";
import { useDispatch, useSelector } from "react-redux";
import { saveDataAction } from "../../modules/localstorage/localstorage.actions";
import ExchangeApi from "../../modules/exchangeApi/exchangeApi.api";

const Form = () => {
	const initialFormState = {
		currency: "",
		amount: "",
		purchaseDate: "",
		price: "",
		errors: [],
	};

	const localStorage = new LocalStorage();
	const exchangeApi = new ExchangeApi();

	const dispatch = useDispatch();
	const entries = useSelector(state => state.entries);

	const [formState, setFormState] = useState(initialFormState);

	// useEffect(() => {
	// 	getPastRateByDate();
	// }, [formState.currency, formState.purchaseDate]);

	// const getPastRateByDate = () => {
	// 	const { currency, purchaseDate, price } = formState;

	// 	if (currency && purchaseDate) {
	// 		const rateFromApi = exchangeApi.getPastRate(purchaseDate, currency);
	// 		setFormState({
	// 			...formState,
	// 			[price]: rateFromApi,
	// 		});
	// 	}
	// };

	exchangeApi.getCurrentRate();

	const handleFormField = (name, value) => {
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const errors = validateForm(formState, formFields);

		if (errors.length === 0) {
			localStorage.saveToLocalStorage("localStorageData", formState);
			dispatch(saveDataAction(formState));
			console.log(entries);
			setFormState(initialFormState);
		} else {
			const errorMessage = "Please check the form. All fields must be filled";
			setFormState({
				...formState,
				errors: errorMessage,
			});
		}
	};

	const renderFields = formFields.map(field => {
		return (
			<FormField
				key={field.name}
				formField={field}
				currentState={formState}
				onChange={handleFormField}
			/>
		);
	});

	return (
		<>
			<form onSubmit={handleSubmit}>
				{renderFields}
				<Button type='submit'>Save</Button>
			</form>
			<Error>{formState.errors && formState.errors}</Error>
		</>
	);
};

export default Form;
