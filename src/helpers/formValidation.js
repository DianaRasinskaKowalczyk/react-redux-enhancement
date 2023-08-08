export const validateForm = (data, fields) => {
	const errors = [];

	fields.forEach(field => {
		const { name, required, errMessage } = field;
		const value = data[name];

		if (required) {
			if (value.length < 1) {
				errors.push(errMessage);
			}
		}
	});

	return errors;
};
