import types from "./localstorage.types";
import LocalStorageApi from "./localstorage.api";

const lsAPI = new LocalStorageApi();

export const saveDataFromLSAction = data => {
	return {
		type: types.SAVE_FROM_LS,
		payload: data,
	};
};

export const loadDataFromLS =
	(name = "lsData") =>
	dispatch => {
		const dataFromLS = lsAPI.loadFromLocalStorage(name);

		if (dataFromLS) {
			dispatch(saveDataFromLS(dataFromLS));
		}
	};
