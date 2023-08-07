import React, { useState } from "react";
import FormField from "../formField/FormField";
import { formFields } from "../../data/formFields";
import Button from "../Button/Button";
import { validateForm } from "../../helpers/formValidation";
import Error from "../Error/Error";

const Form = () => {
	const initialFormState = {
		currency: "",
		amount: "",
		purchaseDate: "",
		price: "",
		errors: "",
	};

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
		const errorMessage = "Please check the form. All fields must be filled";
		setFormState({
			...formState,
			errors: errorMessage,
		});
		if (errors.length === 0) {
			console.log("no errors");
		}

		setFormState(initialFormState);
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
			<Error>{formState.errors}</Error>
		</>
	);
};

export default Form;
