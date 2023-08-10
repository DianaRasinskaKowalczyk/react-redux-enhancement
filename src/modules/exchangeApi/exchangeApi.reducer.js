import types from "./exchangeApi.types";

const initialState = {
	currencies: [],
};

const reducerCurrency = (state = initialState, action) => {
	switch (action.type) {
		case types.SAVE_CURRENT_RATE:
			return {
				...state,
				currencies: [...state.currencies, action.payload],
			};
		default:
			return state;
	}
};

export default reducerCurrency;
