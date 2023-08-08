import types from "./localstorage.types";

const initialState = {
	lsData: [],
};

const reducerLS = (state = initialState, action) => {
	switch (action.type) {
		case types.LOAD_FROM_LS:
			return {
				...state,
				lsData: action.payload,
			};
		default:
			return state;
	}
};

export default reducerLS;
