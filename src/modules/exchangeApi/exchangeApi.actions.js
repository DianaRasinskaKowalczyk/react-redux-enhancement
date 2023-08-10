import ExchangeApi from "./exchangeApi.api";
import types from "./exchangeApi.types";

const exchangeApi = new ExchangeApi();

export const saveCurrentRateAction = rate => {
	return {
		type: types.SAVE_CURRENT_RATE,
		payload: rate,
	};
};

export const loadCurrentRateFromApi = () => dispatch => {
	exchangeApi
		.getCurrentRate()
		.then(resp => dispatch(saveCurrentRateAction(resp)));
};
