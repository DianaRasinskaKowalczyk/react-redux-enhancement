export const validateForm = (data, fields) => {
	const errors = [];

	fields.forEach(field => {
		const { name, required, pattern, errMessage } = field;
		const value = data[name];

		if (required) {
			if (value.length < 1 && !field.pattern) {
				errors.push(errMessage);
			}
		}

		if (pattern) {
			const reg = new RegExp(pattern);
			if (!reg.test(value)) {
				errors.push(errMessage);
			}
		}
	});

	return errors;
};
