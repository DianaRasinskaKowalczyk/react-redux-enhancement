import React, { useEffect, useState } from "react";
import FormField from "../formField/FormField";
import { formFields } from "../../data/formFields";
import Button from "../Button/Button";
import { validateForm } from "../../helpers/formValidation";
import Error from "../Error/Error";
import LocalStorage from "../../modules/localstorage/localstorage.api";
import { useDispatch, useSelector } from "react-redux";
import { insertDataAction } from "../../modules/localstorage/localstorage.actions";
import ExchangeApi from "../../modules/exchangeApi/exchangeApi.api";

const Form = () => {
	const initialFormState = {
		currency: "",
		amount: "",
		purchaseDate: "",
		price: "",
		errors: [],
	};

	const exchangeApi = new ExchangeApi();

	const dispatch = useDispatch();
	const entries = useSelector(state => state.form.entries);

	const [formState, setFormState] = useState(initialFormState);

	useEffect(() => {
		getPastRateByDate();
	}, [formState.currency, formState.purchaseDate]);

	const getPastRateByDate = () => {
		const { currency, purchaseDate } = formState;

		if (currency && purchaseDate) {
			exchangeApi.getPastRate().then(resp =>
				setFormState({
					...formState,
					price: resp.toFixed(2),
				})
			);
		}
	};

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
			dispatch(insertDataAction("localStorageData", formState));
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
