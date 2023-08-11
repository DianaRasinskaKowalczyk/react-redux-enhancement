import types from "./localstorage.types";

const initialState = {
	entries: [],
};

const reducerForm = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_DATA:
			return {
				...state,
				entries: action.payload,
			};
		default:
			return state;
	}
};

export default reducerForm;
