import React from "react";
import Label from "./../Label/Label";

const FormField = props => {
	const { formField, currentState, onChange } = props;

	const handleChange = e => {
		const { name, value } = e.target;
		onChange(name, value);
	};



	return (
		<React.Fragment key={formField.name}>
			<Label name={formField.name} label={formField.label} /> {""}
			{formField.type === "select" ? (
				<select
					name={formField.name}
					value={currentState[formField.name]}
					type={formField.type}
					onChange={e => handleChange(e)}>
					<option value=''>select currency</option>
					{formField.options.map(option => (
						<option value={option} key={option}>
							{option}
						</option>
					))}
				</select>
			) : (
				<input
					name={formField.name}
					type={formField.type}
					value={currentState[formField.name]}
					placeholder={formField.placeholder}
					onChange={e => handleChange(e)}
					max={formField.maxDate}
					min={formField.minValue}></input>
			)}
		</React.Fragment>
	);
};

export default FormField;

