import React, { useState } from "react";
import FormField from "../formField/FormField";
import { formFields } from "../../data/formFields";
import Button from "../Button/Button";
import { validateForm } from "../../helpers/formValidation";
import Error from "../Error/Error";
import LocalStorageApi from "../../modules/localstorage/localstorage.api";

const Form = () => {
	const initialFormState = {
		currency: "",
		amount: "",
		purchaseDate: "",
		price: "",
		errors: [],
	};

	const lsApi = new LocalStorageApi();

	const [formState, setFormState] = useState(initialFormState);

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
			lsApi.saveToLocalStorage("lsData", formState);
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
