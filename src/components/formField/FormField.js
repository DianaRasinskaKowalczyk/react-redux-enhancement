import React from "react";
import Label from "../Label/Label";
import DatePicker from "react-multi-date-picker";

const FormField = props => {
	const { formField, currentState, onChange, maxDate } = props;

	const handleChange = e => {
		const { name, value } = e.target;
		onChange(name, value);
	};

	const handleDateChange = (name, value) => {
		onChange(name, value);
	};

	return (
		<>
			<Label name={formField.name}>{formField.label}</Label>
			{formField.type === "select" ? (
				<select
					name={formField.name}
					value={currentState[formField.name]}
					onChange={handleChange}>
					<option value=''>select currency</option>
					{formField.options.map(option => (
						<option value={option} key={option}>
							{option}
						</option>
					))}
				</select>
			) : formField.type === "date" ? (
				<DatePicker
					maxDate={maxDate}
					value={currentState[formField.name]}
					onChange={date => handleDateChange(formField.name, date)}
				/>
			) : (
				<input
					name={formField.name}
					type={formField.type}
					value={currentState[formField.name]}
					placeholder={formField.placeholder}
					onChange={handleChange}></input>
			)}
		</>
	);
};

export default FormField;

