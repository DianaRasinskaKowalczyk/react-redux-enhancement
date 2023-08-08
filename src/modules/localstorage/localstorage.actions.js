import types from "./localstorage.types";
import LocalStorageApi from "./localstorage.api";

const lsAPI = new LocalStorageApi();

export const loadDataFromLSAction = data => {
	return {
		type: types.LOAD_FROM_LS,
		payload: data,
	};
};

export const sendDataToLS = (name, data) => {
	lsAPI.saveToLocalStorage(name, data);
};

export const loadDataFromLS = name => dispatch => {
	const dataFromLS = lsAPI.loadFromLocalStorage(name);

	if (dataFromLS) {
		dispatch(loadDataFromLS(dataFromLS));
	}
};
