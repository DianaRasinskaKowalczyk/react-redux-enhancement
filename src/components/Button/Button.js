import React from "react";

const Button = props => {
	const { children, type } = props;

	return <button type={type}>{children}</button>;
};

export default Button;
