import React from "react";

const Label = props => {
	const { name, label } = props;

	return <label htmlFor={name}>{label}</label>;
};

export default Label;
